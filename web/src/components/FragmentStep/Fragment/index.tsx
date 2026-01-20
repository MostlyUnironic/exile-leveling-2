import { Data } from "../../../../../common/data";
import { Fragments } from "../../../../../common/route-processing/fragment/types";
import { GameData } from "../../../../../common/types";
import { CopyToClipboard } from "../../CopyToClipboard";
import { InlineFakeBlock } from "../../InlineFakeBlock";
import { ItemReward } from "../../ItemReward";
import styles from "./styles.module.css";
import classNames from "classnames";
import React from "react";
import {
  BsArrowDownLeftSquare,
  BsArrowDownRightSquare,
  BsArrowDownSquare,
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsArrowUpLeftSquare,
  BsArrowUpRightSquare,
  BsArrowUpSquare,
} from "react-icons/bs";

/**
 * Fragment Component - Renders different types of route instructions
 * 
 * This module converts structured fragment data into visual UI components.
 * Each fragment type (kill, area, quest, waypoint, etc.) has a dedicated renderer.
 * Returns a tuple of [primary content, secondary content/link].
 */

/**
 * Resolves image paths relative to the component's images directory.
 * Uses Vite's import.meta.url for correct path resolution at runtime.
 */
function getImageUrl(path: string) {
  return new URL(`./images/${path}`, import.meta.url).href;
}

function minAreaLevel(areaLevel: number) {
  return Math.max(1, areaLevel - (3 + Math.floor(areaLevel / 16)));
}

function MinAreaLevelComponent(areaLevel: number) {
  return (
    <span className={classNames(styles.areaLevel)}>
      {minAreaLevel(areaLevel)}
      {"+"}
    </span>
  );
}

/**
 * Renders an enemy/boss name with styled emphasis.
 */
function EnemyComponent(enemy: string) {
  return <span className={classNames(styles.enemy)}>{enemy}</span>;
}

/**
 * Renders an area with name, minimum level, and town indicator.
 * Shows town icon for town areas, minimum level badge for dungeons.
 */
function AreaComponent(
  name: string,
  isTownArea: boolean,
  areaLevel: number | undefined
) {
  return (
    <div className={classNames(styles.noWrap)}>
      <span className={classNames(styles.area)}>{name}</span>
      {!isTownArea && areaLevel !== undefined && (
        <> {MinAreaLevelComponent(areaLevel)}</>
      )}
      {isTownArea && (
        <img
          src={getImageUrl("town.png")}
          className={classNames("inlineIcon")}
          alt=""
        />
      )}
    </div>
  );
}

/**
 * Renders a quest with its name and the NPCs who offer rewards.
 * Deduplicates NPCs from the selected reward offers.
 */
function QuestComponent(fragment: Fragments.QuestFragment) {
  const quest = Data.Quests[fragment.questId];

  const npcs = Array.from(
    new Set(
      fragment.rewardOffers
        .map((x) => quest.reward_offers[x]?.quest_npc)
        .filter((x) => x !== undefined)
    )
  );

  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("quest.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.quest)}>{quest.name}</span>
      {npcs.length > 0 && (
        <> - {GenericComponent(Array.from(npcs).join(", "))}</>
      )}
    </div>
  );
}

/**
 * Renders plain quest text (typically hints or objectives).
 */
function QuestTextComponent(text: string) {
  return <span className={classNames(styles.questText)}>{text}</span>;
}

/**
 * Renders a waypoint with icon and label.
 */
function WaypointComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("waypoint.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.waypoint)}>Waypoint</span>
    </div>
  );
}

/**
 * Renders a Trial of Ascendancy with icon and label.
 */
function TrialComponent() {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.trial)}>Trial of Ascendancy</span>
    </div>
  );
}

/**
 * Renders a logout action that returns to the last visited town area.
 */
function LogoutComponent(area: GameData.Area) {
  return (
    <>
      {GenericComponent("Logout")}
      <span> ➞ </span>
      {AreaComponent(area.name, area.is_town_area, area.level)}
    </>
  );
}

/**
 * Renders portal usage with optional destination area.
 * Used for both setting a portal and using it for travel.
 */
function PortalComponent(area?: GameData.Area) {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("portal.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.portal)}>Portal</span>
      {area && (
        <>
          <span> ➞ </span>
          {AreaComponent(area.name, area.is_town_area, area.level)}
        </>
      )}
    </div>
  );
}

/**
 * Directional arrow components indexed 0-7 for compass directions.
 * Index 0 = up, 1 = up-right, 2 = right, ... 7 = up-left (clockwise)
 */
const directions = [
  <InlineFakeBlock child={<BsArrowUpSquare />} />,
  <InlineFakeBlock child={<BsArrowUpRightSquare />} />,
  <InlineFakeBlock child={<BsArrowRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownSquare />} />,
  <InlineFakeBlock child={<BsArrowDownLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowUpLeftSquare />} />,
];

/**
 * Renders a directional arrow based on compass index (0-7).
 */
function DirectionComponent(dirIndex: number) {
  return <span>{directions[dirIndex]}</span>;
}

/**
 * Renders generic text with default styling.
 */
function GenericComponent(text: string) {
  return <span className={classNames(styles.default)}>{text}</span>;
}

/**
 * Renders a crafting bench with available recipes.
 */
function CraftingComponent(craftingRecipes: string[]) {
  return (
    <span>
      <div className={classNames(styles.noWrap)}>
        <img
          src={getImageUrl("crafting.png")}
          className={classNames("inlineIcon")}
          alt=""
        />
        {GenericComponent("Crafting: ")}
      </div>
      {GenericComponent(craftingRecipes.join(", "))}
    </span>
  );
}

/**
 * Maps ascendancy versions to their labyrinth layout URLs (poelab.com) and area IDs.
 * Used to link to daily labyrinth layouts for each difficulty.
 */
const ASCEND_LOOKUP: Record<
  Fragments.AscendFragment["version"],
  { url: string; areaId: string }
> = {
  normal: { url: "https://www.poelab.com/gtgax", areaId: "1_Labyrinth_boss_3" },
  cruel: { url: "https://www.poelab.com/r8aws", areaId: "2_Labyrinth_boss_3" },
  merciless: {
    url: "https://www.poelab.com/riikv",
    areaId: "3_Labyrinth_boss_3",
  },
  eternal: {
    url: "https://www.poelab.com/wfbra",
    areaId: "EndGame_Labyrinth_boss_3",
  },
};

/**
 * Renders ascendancy labyrinth info with a link to the daily layout.
 * Returns [primary content showing labyrinth name/level, secondary content with layout link].
 */
function AscendComponent(
  version: Fragments.AscendFragment["version"]
): [React.ReactNode, React.ReactNode] {
  const { url, areaId } = ASCEND_LOOKUP[version];
  const area = Data.Areas[areaId];
  return [
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.trial)}>Ascend</span>
      <> {MinAreaLevelComponent(area.level)}</>
    </div>,
    <a
      href={url}
      target="_blank"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      Daily Layout
    </a>,
  ];
}

/**
 * Main Fragment renderer - converts any fragment type to React components.
 * 
 * Returns a tuple: [primary content, secondary content/link]
 * - Primary: main visual content to display inline
 * - Secondary: optional link or supplementary info (e.g., labyrinth layout link)
 * 
 * Handles 20+ fragment types including movement, quests, rewards, and mechanics.
 */
export function Fragment(
  fragment: Fragments.AnyFragment
): [React.ReactNode, React.ReactNode] {
  if (typeof fragment === "string") return [<>{fragment}</>, null];

  // Dispatch to appropriate renderer based on fragment type
  switch (fragment.type) {
    case "kill":
      return [EnemyComponent(fragment.value), null];
    case "arena":
      return [AreaComponent(fragment.value, false, undefined), null];
    case "area": {
      const area = Data.Areas[fragment.areaId];
      return [AreaComponent(area.name, area.is_town_area, area.level), null];
    }
    case "enter": {
      const area = Data.Areas[fragment.areaId];
      return [AreaComponent(area.name, area.is_town_area, area.level), null];
    }
    case "logout":
      return [LogoutComponent(Data.Areas[fragment.areaId]), null];
    case "waypoint":
      return [WaypointComponent(), null];
    case "waypoint_use": {
      const dstArea = Data.Areas[fragment.dstAreaId];
      const srcArea = Data.Areas[fragment.srcAreaId];
      return [
        <>
          {WaypointComponent()}
          <span> ➞ </span>
          {AreaComponent(
            dstArea.map_name || dstArea.name,
            dstArea.is_town_area,
            dstArea.level
          )}
          {/* Show act transition for cross-act waypoint usage */}
          {dstArea.act !== srcArea.act &&
            dstArea.id !== "Labyrinth_Airlock" && (
              <> - {GenericComponent(`Act ${dstArea.act}`)}</>
            )}
        </>,
        null,
      ];
    }
    case "waypoint_get":
      return [WaypointComponent(), null];
    case "portal_use":
      return [PortalComponent(Data.Areas[fragment.dstAreaId]), null];
    case "portal_set":
      return [PortalComponent(), null];
    case "quest":
      return [QuestComponent(fragment), null];
    case "quest_text":
      return [QuestTextComponent(fragment.value), null];
    case "generic":
      return [GenericComponent(fragment.value), null];
    case "reward_quest":
      return [<ItemReward item={fragment.item} rewardType="quest" />, null];
    case "reward_vendor":
      return [
        <ItemReward
          item={fragment.item}
          cost={fragment.cost}
          rewardType="vendor"
        />,
        null,
      ];
    case "trial":
      return [TrialComponent(), null];
    case "ascend":
      return AscendComponent(fragment.version);
    case "crafting":
      return [CraftingComponent(fragment.crafting_recipes), null];
    case "dir":
      return [DirectionComponent(fragment.dirIndex), null];
    case "copy":
      return [<CopyToClipboard text={fragment.text} />, null];
    case "image":
      return [ImageComponent(fragment.imagePath, fragment.width, fragment.height), null];  
  }

  // Fallback for unmapped fragment types (should not occur with proper data)
  return [<>{`unmapped: ${JSON.stringify(fragment)}`}</>, null];
}

function ImageComponent(imagePath: string, width: number, height: number) {
  return (
    <img
      src={getImageUrl(imagePath)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: "contain",
      }}
      alt=""
    />
  );
}
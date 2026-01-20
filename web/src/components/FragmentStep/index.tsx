import { RouteData } from "../../../../common/route-processing/types";
import { configSelector } from "../../state/config";
import { SplitRow } from "../SplitRow";
import { Fragment } from "./Fragment";
import styles from "./styles.module.css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BiInfoCircle, BiSolidInfoCircle } from "react-icons/bi";
import { atom, useRecoilValue } from "recoil";
import type { RecoilState } from "recoil";

interface StepProps {
  step: RouteData.FragmentStep;
  // optional Recoil state that tracks whether this step is completed
  isCompletedState?: RecoilState<boolean>;
}

export function FragmentStep({ step, isCompletedState }: StepProps) {
  const config = useRecoilValue(configSelector);
  const [showSubSteps, setShowSubSteps] = useState(
    config.showSubsteps && step.subSteps.length > 0
  );
  // Provide a default completed-state atom so we can always call hooks in the same order.
  // This avoids conditional hook calls while still allowing an optional per-step Recoil state.
  const DEFAULT_COMPLETED_STATE = atom<boolean>({
    key: "FragmentStep/defaultCompletedState",
    default: false,
  });

  // Resolve the Recoil state to read the completed flag (falls back to default false)
  const completedState = (isCompletedState as RecoilState<boolean>) ||
    DEFAULT_COMPLETED_STATE;
  const isCompleted = useRecoilValue(completedState);

  // When a step becomes completed, collapse its sub-steps; when it becomes un-completed,
  // restore sub-step visibility according to the global config and whether any sub-steps exist.
  useEffect(() => {
    if (isCompleted) setShowSubSteps(false);
    else setShowSubSteps(config.showSubsteps && step.subSteps.length > 0);
  }, [isCompleted, config.showSubsteps, step.subSteps.length]);

  const headNodes: React.ReactNode[] = [];
  const tailNodes: React.ReactNode[] = [];

  for (let i = 0; i < step.parts.length; i++) {
    const fragment = step.parts[i];
    const [head, tail] = Fragment(fragment);

    if (head) headNodes.push(head);
    if (tail) tailNodes.push(tail);
  }

  if (step.subSteps.length > 0) {
    headNodes.push(
      <>
        {" "}
        <button
          className={classNames(styles.subStepToggle)}
          onClick={(e) => {
            setShowSubSteps(!showSubSteps);
            e.stopPropagation();
          }}
        >
          {showSubSteps ? (
            <BiSolidInfoCircle className={classNames("inlineIcon")} />
          ) : (
            <BiInfoCircle className={classNames("inlineIcon")} />
          )}
        </button>
      </>
    );
  }

  return (
    <>
      {headNodes.length > 0 && tailNodes.length > 0 ? (
        <SplitRow
          left={React.Children.toArray(headNodes)}
          right={React.Children.toArray(tailNodes)}
        />
      ) : (
        <span>{React.Children.toArray(headNodes)}</span>
      )}
      {showSubSteps && (
        <>
          <hr />
          {React.Children.toArray(
            step.subSteps.map((x) => (
              <span>
                {"• "}
                <FragmentStep step={x} />
              </span>
            ))
          )}
        </>
      )}
    </>
  );
}

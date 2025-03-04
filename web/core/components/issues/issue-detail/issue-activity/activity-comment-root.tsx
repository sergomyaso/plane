import { FC } from "react";
import { observer } from "mobx-react";
// hooks
import { EActivityFilterType } from "@/constants/issue";
import { useIssueDetail } from "@/hooks/store";
// components
import { IssueActivityItem } from "./activity/activity-list";
import { IssueCommentCard } from "./comments/comment-card";
// types
import { TActivityOperations } from "./root";

type TIssueActivityCommentRoot = {
  workspaceSlug: string;
  projectId: string;
  issueId: string;
  selectedFilters: EActivityFilterType[];
  activityOperations: TActivityOperations;
  showAccessSpecifier?: boolean;
  disabled?: boolean;
};

export const IssueActivityCommentRoot: FC<TIssueActivityCommentRoot> = observer((props) => {
  const { workspaceSlug, issueId, selectedFilters, activityOperations, showAccessSpecifier, projectId, disabled } =
    props;
  // hooks
  const {
    activity: { getActivityCommentByIssueId },
    comment: {},
  } = useIssueDetail();

  const activityComments = getActivityCommentByIssueId(issueId);

  if (!activityComments || (activityComments && activityComments.length <= 0)) return <></>;

  const isCommentFilterSelected = selectedFilters.includes(EActivityFilterType.COMMENT);
  const isActivityFilterSelected = selectedFilters.includes(EActivityFilterType.ACTIVITY);

  const filteredActivityComments = activityComments.filter(
    (activityComment) =>
      (activityComment.activity_type === "COMMENT" && isCommentFilterSelected) ||
      (activityComment.activity_type === "ACTIVITY" && isActivityFilterSelected)
  );

  return (
    <div>
      {filteredActivityComments.map((activityComment, index) =>
        activityComment.activity_type === "COMMENT" ? (
          <IssueCommentCard
            projectId={projectId}
            key={activityComment.id}
            workspaceSlug={workspaceSlug}
            commentId={activityComment.id}
            activityOperations={activityOperations}
            ends={index === 0 ? "top" : index === filteredActivityComments.length - 1 ? "bottom" : undefined}
            showAccessSpecifier={showAccessSpecifier}
            disabled={disabled}
          />
        ) : activityComment.activity_type === "ACTIVITY" ? (
          <IssueActivityItem
            activityId={activityComment.id}
            ends={index === 0 ? "top" : index === filteredActivityComments.length - 1 ? "bottom" : undefined}
          />
        ) : (
          <></>
        )
      )}
    </div>
  );
});

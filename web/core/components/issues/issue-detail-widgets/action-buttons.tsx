"use client";
import React, { FC } from "react";
import { Layers, Link, Paperclip, Waypoints } from "lucide-react";
// components
import {
  IssueAttachmentActionButton,
  IssueLinksActionButton,
  RelationActionButton,
  SubIssuesActionButton,
  IssueDetailWidgetButton,
} from "@/components/issues/issue-detail-widgets";

type Props = {
  workspaceSlug: string;
  projectId: string;
  issueId: string;
  disabled: boolean;
};

export const IssueDetailWidgetActionButtons: FC<Props> = (props) => {
  const { workspaceSlug, projectId, issueId, disabled } = props;
  return (
    <div className="flex items-center flex-wrap gap-2">
      <SubIssuesActionButton
        workspaceSlug={workspaceSlug}
        projectId={projectId}
        issueId={issueId}
        disabled={disabled}
        customButton={
          <IssueDetailWidgetButton
            title="Add sub-issues"
            icon={<Layers className="h-3.5 w-3.5 flex-shrink-0 text-custom-text-300" strokeWidth={2} />}
          />
        }
      />
      <RelationActionButton
        workspaceSlug={workspaceSlug}
        projectId={projectId}
        issueId={issueId}
        customButton={
          <IssueDetailWidgetButton
            title="Add Relation"
            icon={<Waypoints className="h-3.5 w-3.5 flex-shrink-0 text-custom-text-300" strokeWidth={2} />}
          />
        }
      />
      <IssueLinksActionButton
        workspaceSlug={workspaceSlug}
        projectId={projectId}
        issueId={issueId}
        customButton={
          <IssueDetailWidgetButton
            title="Add Links"
            icon={<Link className="h-3.5 w-3.5 flex-shrink-0 text-custom-text-300" strokeWidth={2} />}
          />
        }
      />
      <IssueAttachmentActionButton
        workspaceSlug={workspaceSlug}
        projectId={projectId}
        issueId={issueId}
        customButton={
          <IssueDetailWidgetButton
            title="Attach"
            icon={<Paperclip className="h-3.5 w-3.5 flex-shrink-0 text-custom-text-300" strokeWidth={2} />}
          />
        }
      />
    </div>
  );
};

interface WorkspaceIdPageProps {
  params: { workspaceId: string };
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return <div>WorkspacePage {params.workspaceId}</div>;
};

export default WorkspaceIdPage;

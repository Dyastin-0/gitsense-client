import TruncatedText from "./ui/TruncatedText";
import useContextMenu from "./hooks/useContextMenu";
import useModal from "./hooks/useModal";
import CreateWebhook from "./modals/CreateWebhook";

const Repository = ({ repository }) => {
  const { setOpen, setModal } = useModal();

  const menuOptions = [
    {
      label: "Create Webhook",
      onClick: () => {
        setModal(<CreateWebhook repository={repository} />);
        setOpen(true);
      },
    },
  ];

  const { onContextMenu, ContextMenu } = useContextMenu(menuOptions);

  return (
    <div
      className="relative flex flex-col h-[140px] bg-secondary rounded-md p-3 text-xs"
      onContextMenu={onContextMenu}
    >
      <TruncatedText text={repository.name} className="font-semibold" />
      <TruncatedText
        text={repository.full_name}
        className="text-secondary-foreground"
      />
      <p className="mt-auto">{repository.description}</p>
      <ContextMenu />
    </div>
  );
};

export default Repository;

import { useState } from "react";
import Button from "../ui/Button";
import NormalInput from "../ui/NormalInput";
import TextArea from "../ui/TextArea";
import Selector from "../ui/Selector";
import useModal from "../hooks/useModal";
import useAxios from "../../hooks/useAxios";
import useToast from "../hooks/useToast";

const WebhookForm = ({ repository }) => {
  const { setOpen } = useModal();
  const { api } = useAxios();
  const { toastInfo } = useToast();

  const [name, setName] = useState("");
  const [secret, setSecret] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [user, setUser] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [hostKey, setHostKey] = useState("");
  const [callbackScript, setCallbackScript] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);

  const events = [
    "push",
    "pull_request",
    "issues",
    "issue_comment",
    "fork",
    "star",
    "create",
    "delete",
    "release",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !secret || !ipAddress || !user || !privateKey || !hostKey) {
      toastInfo("Missing required fields");
      return;
    }

    api
      .post(`/webhook`, {
        name,
        secret,
        repository: repository.name,
        callback_script: callbackScript,
        events: selectedEvents,
        ssh: {
          ip_address: ipAddress,
          user,
          private_key: privateKey,
          host_key: hostKey,
        },
      })
      .then(() => {
        setOpen(false);
        toastInfo("Webhook created successfully");
      });
  };

  return (
    <form className="w-full flex flex-col gap-2 p-1" onSubmit={handleSubmit}>
      <h1 className="text-secondary-foreground">Webhook</h1>
      <NormalInput
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <NormalInput
        type="password"
        placeholder="Secret"
        required
        value={secret}
        onChange={(e) => setSecret(e.currentTarget.value)}
      />
      <h2 className="text-secondary-foreground">Events</h2>
      <Selector
        key="events"
        items={events}
        selectedItems={selectedEvents}
        setSelectedItems={setSelectedEvents}
      />
      <h1 className="text-secondary-foreground">SSH</h1>
      <NormalInput
        type="text"
        placeholder="IP Address"
        required
        value={ipAddress}
        onChange={(e) => setIpAddress(e.currentTarget.value)}
      />
      <NormalInput
        type="text"
        placeholder="User"
        required
        value={user}
        onChange={(e) => setUser(e.currentTarget.value)}
      />
      <TextArea
        placeholder="Private Key"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.currentTarget.value)}
      />
      <TextArea
        placeholder="Host Key"
        value={hostKey}
        onChange={(e) => setHostKey(e.currentTarget.value)}
      />
      <h1 className="text-secondary-foreground">Callback Script</h1>
      <TextArea
        placeholder="Callback Script"
        value={callbackScript}
        onChange={(e) => setCallbackScript(e.currentTarget.value)}
      />
      <div className="flex gap-2 place-self-end">
        <Button
          type="text"
          text="Cancel"
          variant="ghost"
          onClick={() => setOpen(false)}
        />
        <Button type="submit" text="Create" />
      </div>
    </form>
  );
};

export default WebhookForm;

const alertStyles = {
  padding: "16px",
  BorderRaduis: "6px",
  fontSize: "16px",
  fontWeight: 400,
};

const SeverityStyles = {
  Success: {
    color: "#05132",
    background: "#d1e7dd",
  },
  info: {
    color: "#055160",
    background: "cff4fc",
  },
  warning: {
    color: "#664d03",
    background: "fff3cd",
  },
  info: {
    color: "#842029",
    background: "f8d7da",
  },
};

const Alert = () => {
  const alert = {
    text: "Missing grades",
    type: "danger",
  };
  const fullStyles = {
    ...alertStyles,
    ...SeverityStyles[alert.type],
  };
  return <div>{alert.text}</div>;
};

export default alert;

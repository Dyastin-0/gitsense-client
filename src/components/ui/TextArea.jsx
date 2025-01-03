const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="bg-secondary rounded-md outline-none p-2
          transition-all duration-300
          placeholder:text-secondary-foreground
          focus:shadow-[var(--accent-secondary)_0_0_0_2px]
          active:shadow-[var(--highlight)_0_0_0_2px]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;

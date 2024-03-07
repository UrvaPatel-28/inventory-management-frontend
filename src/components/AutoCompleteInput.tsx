import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export type SuggestionEntry = {
  id: string;
  display: string;
};

const SuggestionHolder = ({
  suggestions,
  onSuggestionClick,
}: {
  suggestions: SuggestionEntry[];
  onSuggestionClick: (entry: SuggestionEntry) => void;
}) => {
  return (
    <AnimatePresence>
      {suggestions.length !== 0 && (
        <motion.ol
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="absolute z-[1] bg-surface-variant w-full max-h-96 overflow-y-scroll top-full"
        >
          {suggestions.map((entry) => (
            <li key={entry.id} onClick={() => onSuggestionClick(entry)}>
              {entry.display}
            </li>
          ))}
        </motion.ol>
      )}
    </AnimatePresence>
  );
};

const AutoCompleteInput = ({
  name,
  placeholder,
  required,
  getSuggestions,
}: {
  getSuggestions: (query: string) => Promise<SuggestionEntry[]>;
  name: string;
  required?: boolean;
  placeholder: string;
}) => {
  const [sugg, setSugg] = useState<SuggestionEntry[]>([]);
  const uuidInput = useRef<HTMLInputElement>(null);
  const displayInput = useRef<HTMLInputElement>(null);

  const uuidClickHandle = (e: SuggestionEntry) => {
    const uuidInputEl = uuidInput.current;
    if (uuidInputEl == null) throw new Error("UUID Input El is NULL");

    const displayInputEl = displayInput.current;
    if (displayInputEl == null) throw new Error("Display Input El is NULL");

    uuidInputEl.value = e.id;
    displayInputEl.value = e.display;

    setSugg([]);
  };

  return (
    <div className="relative flex gap-4">
      <input
        ref={uuidInput}
        className="!bg-surface-variant p-2 w-full text-on-surface-variant"
        type="text"
        placeholder="UUID of the chosen entry"
        name={name}
        readOnly
        required={required}
      />
      <input
        ref={displayInput}
        placeholder={placeholder}
        onChange={(e) =>
          getSuggestions((e.target as HTMLInputElement).value).then((x) =>
            setSugg(x)
          )
        }
        className="bg-surface text-on-surface p-2 border rounded-sm outline-primary w-full"
        type="text"
        required={required}
      />

      <SuggestionHolder
        onSuggestionClick={uuidClickHandle}
        suggestions={sugg}
      />
    </div>
  );
};

export default AutoCompleteInput;

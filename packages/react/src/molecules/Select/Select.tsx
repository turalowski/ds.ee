import React, {
  KeyboardEventHandler,
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import Text from '../../atoms/Text';

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption: (props: RenderOptionProps) => React.ReactNode;
}

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  DOWN_ARROW: 40,
};

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option ...',
  renderOption,
  onOptionSelected: handler,
}) => {
  const labelRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>([]);

  const onOptionClicked = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }

    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  const highlightItem = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = event => {
    event.preventDefault();

    if (
      [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
        event.keyCode
      )
    ) {
      setIsOpen(true);
      highlightItem(0);
    }
  };

  useEffect(() => {
    const refs = options.map(_ => createRef<HTMLLIElement>());
    setOptionRefs(refs);
  }, [options.length]);

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0 + 10);
  }, [labelRef.current?.offsetHeight]);

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs[highlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
        onKeyDown={onButtonKeyDown}
        aria-haspopup
        aria-expanded={isOpen ? true : undefined}
        aria-controls="dse-select-list"
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>
        <svg
          className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="1rem"
          height="1rem"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen ? (
        <ul
          id="dse-select-list"
          style={{ top: overlayTop }}
          className="dse-select__overlay"
          role="menu"
        >
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  ref: ref,
                  tabIndex: isHighlighted ? -1 : 0,
                  className: `dse-select__option
${isSelected ? 'dse-select__option--selected' : ''} ${isHighlighted ? 'dse-select__option--highlighted' : ''}`,
                  key: option.value,
                  onClick: () => onOptionClicked(option, optionIndex),
                  onMouseEnter: () => highlightItem(optionIndex),
                  onMOuseLeave: () => highlightItem(null),
                  ...overrideProps,
                };
              },
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li {...renderOptionProps.getOptionRecommendedProps()}>
                <Text>{option.label}</Text>
                {isSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height="1rem"
                    width="1rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;

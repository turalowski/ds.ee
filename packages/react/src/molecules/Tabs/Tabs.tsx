import React, { useState } from 'react';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: number;
  activeTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab = 0,
  activeTab: controlledActiveTab,
  onTabChange,
  className = '',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<number>(defaultActiveTab);
  
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (index: number) => {
    if (items[index].disabled) return;
    
    if (onTabChange) {
      onTabChange(index);
    }
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(index);
    }
  };

  const baseClassName = 'dse-tabs';
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <div className={finalClassName}>
      <div className="dse-tabs-list" role="tablist">
        {items.map((item, index) => (
          <button
            key={index}
            role="tab"
            className={`dse-tab-button ${
              activeTab === index ? 'dse-tab-active' : ''
            } ${item.disabled ? 'dse-tab-disabled' : ''}`}
            onClick={() => handleTabClick(index)}
            aria-selected={activeTab === index}
            aria-disabled={item.disabled}
            tabIndex={activeTab === index ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="dse-tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
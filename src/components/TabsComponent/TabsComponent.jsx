import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabComponent from '../TabComponent/TabComponent';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

class TabsComponent extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return ( <div>
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <TabComponent
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
     
      </div>
<div className="buttons-class">
  <ToggleSwitch/>
  <button className='exitbutton'>EXIT</button>
</div>
<div className="tab-content">
{children.map((child) => {
  if (child.props.label !== activeTab) return undefined;
  return child.props.children;
})}
</div>
</div>
      
    );
  }
}

export default TabsComponent;
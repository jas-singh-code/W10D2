import React from 'react'


class Header extends React.Component {
    render() {
        const currentTab = this.props.tabIndex;
        const header = this.props.tabsArray.map((tab, index)=> {
            const title = tab.title;
            
        })

    }
}

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0
        };
        // this.selectedTabs = this.selectedTabs
    }

    selectTab(num) {
        this.setState({tabIndex: num});
      }

    render() {
        const tabsArray = this.props.tabsArray[this.state.tabIndex];

        return(
            <div>
                <h1>Titles</h1>
                <ul>
                    <Header>
                        tabIndex = {this.state.tabIndex }
                        onTabChosen = {this.selectTab}
                        tabsArray = {this.props.tabsArray}
                    </Header>
                </ul>
                <article>{tabsArray.content}</article>
            </div>
        )
    }
}

export default Tabs;
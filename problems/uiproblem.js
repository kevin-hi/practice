const data = {
    'Boston': 'A city in eastern Massachusetts, the capital of the state, on Massachusetts Bay; pop. 609,023 (est. 2008). It was founded c.1630 by the Massachusetts Bay Company under its governor, John Winthrop(1588–1649). Boston was the scene of many disturbances that led to the American Revolution at the end of the 18th century.',
    'Paris': 'The capital of France, on the Seine River; pop. 2,203,817 (2006). Paris was held by the Romans, who called it Lutetia, and by the Franks, and was established as the capital in 987 under Hugh Capet. It was organized into three parts—the Île de la Cité (an island in the Seine), the Right Bank, and the Left Bank—during the reign of Philippe-Auguste 1180–1223.',
    'Tokyo' : 'The capital of Japan, located on the northwestern shores of Tokyo Bay, on the southeastern part of the island of Honshu; pop. 12,758,000 (est. 2007). Formerly called Edo, it was the center of the military government under the shoguns 1603–1867. Renamed Tokyo in 1868, it replaced Kyoto as the imperial capital.'
};

const {Component} = React;


const Tabs = ({action, city, active}) => <button className={`city-button ${active ? ' active' : ''}`} onClick={action}>{city}</button>;

class Application extends Component {

    constructor(props) {
        super(props);
        //Todo :: Safety check for less than 1 item
        const firstItem = Object.keys(props.data)[0];
        this.state = {
            content: props.data[firstItem],
            activeTab: firstItem
        };
    }

    toggleContent = city => {
        this.setState({content: this.props.data[city], activeTab: city});
    };

    render() {
        const {activeTab, content} = this.state;
        return (
            <div>
            {Object.keys(this.props.data).map(dataKeys => {
                return <Tabs key={dataKeys}
                active={activeTab === dataKeys}
                action={() => this.toggleContent(dataKeys)}
                city={dataKeys}/>;
            })}
            <div className="content-well">{content}</div>
            </div>);
    }
}

const APP_DOM_NODE = document.getElementById("app");
ReactDOM.render(<Application data={data}/>, APP_DOM_NODE);
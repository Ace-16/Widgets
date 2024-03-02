import Accordion from './components/Accordion'
import Search from './components/Search'
import React, { useState } from 'react';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Headers from './components/Headers'

const items = [
    {
        title: "Soham",
        content: "Age - 25"

    },
    {
        title: "Manas",
        content: "Age - 20"
    },
    {
        title: "Ritik",
        content: "Age - 21"
    }
]

const options = [
    {
        label: "Red",
        value: 'red'
    },
    {
        label: "Green",
        value: 'green'
    },
    {
        label: "Blue",
        value: 'blue'
    }
]

function App() {
    const [selected, setSelected] = useState(options[0]);
    
    return (
        <div>
            <Headers />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    label={"Color"}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>);
}

export default App;
import React, { useEffect } from 'react';
import { maticChain, ethChain, goerliTestnet, maticTestnet, bscTest } from '../config/chainChange';
import Dropdown from 'react-bootstrap/Dropdown';


const ConnectChain = () => {
    const [selected, setSelected] = React.useState(new Set(["Set Network"]));
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected],
        console.log(selected)
    );

    const blockImage = () => {
        var eth = "Ethereum";
        var pol = "Polygon";
        var mum = "Mumbai";
        var goe = "Goerli";
        var bsc = "BscTest"
        var init = "Set Network";
        if (selectedValue == eth) {
            return (
                <img src='../images/ethereumlogo.png' width={"160px"} />
            )
        }
        else if (selectedValue == pol) {
            return (
                <img src='../images/polygonwhite.png' width={"160px"} />
            )
        }
        else if (selectedValue == mum) {
            return (
                <h3>Mumbai Testnet</h3>
            )
        }
        else if (selectedValue == goe) {
            return (
                <h3>Goerli Testnet</h3>
            )
        }
        else if (selectedValue == bsc) {
            return (
                <h3>Binance Testnet</h3>
            )
        }
        else if (selectedValue == init) {
            return (
                <div className='mt-4'>
                    <h3>Select Network</h3>
                </div>
            )
        }
    }

    async function enableChain() {
        var poly = "Polygon";
        var eth = "Ethereum";
        var mum = "Mumbai";
        var goe = "Goerli";
        var bsc = "BscTest"
        if (poly === selectedValue) {
            maticChain();
        } else if (eth === selectedValue) {
            ethChain();
        } else if (goe === selectedValue) {
            goerliTestnet();
        } else if (mum === selectedValue) {
            maticTestnet();
        } else if (bsc === selectedValue) {
            bscTest();
        }
    }

    useEffect(() => {
        enableChain();
    }, [selected]);


    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item key="Ethereum">
                        <button onClick={ethChain}>Ethereum Mainnet</button>
                    </Dropdown.Item>
                    <Dropdown.Item key="Polygon">
                        <button onClick={maticChain}>Polygon Mainnet</button>
                    </Dropdown.Item>
                    <Dropdown.Item key="Goerli">
                        <button onClick={goerliTestnet}>Goerli</button>
                    </Dropdown.Item>
                    <Dropdown.Item key="Mumbai">
                        <button onClick={maticTestnet}>Mumbai</button>
                    </Dropdown.Item>
                    <Dropdown.Item key="BscTest">
                        <button onClick={bscTest}>Bsc Testnet</button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ConnectChain;
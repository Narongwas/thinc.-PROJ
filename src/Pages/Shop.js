import Header from "../Components/header_if_sign";
import "./Shop.css"


const money = 0;

function Shop(){
    //imgSrc ยังไม่มีรูปมาใส่
    return (
        <div>
            <Header />
            <div className="group">
                <h3 className="shop-title">MARKET PLACE</h3>
                <h3>CURRENT BALANCE</h3>
                <button className="balance">${money}</button>
            </div>
            <div className="to-justify">
                <Item imgSrc/> <Item imgSrc/> <Item imgSrc/>
            </div>
            <div className="price-group">
                <Price/> <Price/> <Price/>
            </div>
            <div className="to-justify">
                <Item imgSrc/> <Item imgSrc/> <Item imgSrc/>
            </div>
            <div className="price-group">
                <Price/> <Price/> <Price/>
            </div>
        </div>
    );
}

function Item({imgSrc}){
    return (
        <div className="item-frame">
            <img className="item-image" src={imgSrc} alt="image of item"/>
            <h2 className="item-name">Item's name</h2>
            <p3 className="item-desc">Item's description</p3>
        </div>
    );
}

function Price(){
    return(
        <div className="price">
            <h3>$500</h3>
        </div>
    );
}

export default Shop;
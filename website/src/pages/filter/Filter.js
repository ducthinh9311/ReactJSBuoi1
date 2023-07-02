import { useContext } from "react"
import { AppContext } from "../../components/AppContext"
import {  ProductList } from "../data/ProductList"
import "./Filter.css"
export default function Filter() {
    const {  gallery__filter, setData, filterItem, setDataFilter} = useContext(AppContext)
    return (
        <div className="filter_container">
            <div className="galleryWrapper">
                <div className="filterItems">
                    <ul>
                        <li>
                            <button onClick={() =>  setDataFilter(ProductList)}>All</button>
                        </li>
                        {filterItem.map((item) => (
                            <li>
                                <button onClick={() => {
                                     gallery__filter(item)
                                }}>{item}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
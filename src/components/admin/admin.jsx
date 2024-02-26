import { useState } from "react"
import "./style.css"
import BackdropPath from "../../image/backdrop_path"
import { MdOutlineShoppingBag } from "react-icons/md";
import { admin_pass } from "../../adminSys/Sys";
import { useDispatch } from "react-redux";
import { types } from "../../redux/typesFromRedux";
export default function Admin() {
    let [product, setProdusct] = useState({
        title: "",
        description: "",
        price: "",
        link: ""
    })
    let price = product.price.replace(/[a-z]/gi, '')
    let dispatch = useDispatch()
    let adminSession = localStorage.getItem("admin_session") || ''
    let [adminPass, setAdminPass] = useState('')
    const signInAdmin = () => {
        if (adminPass == admin_pass.pass) {
            localStorage.setItem("admin_session", "true")
        } else {
            alert('error')
        }
    }
    const addProduct = () => {
        dispatch({ type: types.add, payload: product })
    }
    return (
        <div className='admin'>
            {adminSession !== "true" && <div className="password_admin">
                <input value={adminPass} onChange={(e) => setAdminPass(e.target.value)} type="text" placeholder="admin_pass" />
                <button onClick={signInAdmin}>Sign In</button>
            </div>}
            {adminSession.includes("true") && <div className="admin_inputs">
                <center><h1>Add plants</h1></center>
                <div className="admin_inputs_items">
                    <input type="text" onChange={e => setProdusct({ ...product, link: e.target.value })} placeholder="link" />
                    <input type="text" onChange={e => setProdusct({ ...product, title: e.target.value })} placeholder="title" />
                    <input type="text" onChange={e => setProdusct({ ...product, description: e.target.value })} placeholder="description" />
                    <input value={price} type="text" onChange={e => setProdusct({ ...product, price: e.target.value })} placeholder="price" />
                    <button> <ion-icon name="bag-add-outline"></ion-icon>Add</button>
                </div>
            </div>}
            {product.price && product.link && product.title && product.description ?
                <div className="admin_final_product">
                    <BackdropPath />
                    <img className="product_img" src={product.link} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.description} </p>
                    <div className="product_price">
                        <h4>${product.price}</h4>
                        <button onClick={addProduct}><MdOutlineShoppingBag /></button>
                    </div>
                </div> : <h3>not product</h3>
            }
        </div>

    )
}

let order = []
const menu = [
    { id:0001, name: "Tarta de jamón y queso", type: "principal", price:100, promo:"1" },
	{ id:0002, name: "Ensalada caprese" , type: "principal", price:100, promo:"1" },
	{ id:0003, name: "Milanesa" , type: "principal", price:100, promo:"1" },
	{ id:0004, name: "Ensalada mixta", type: "guarnicion", price:100, promo:"1" },
	{ id:0005, name: "Papas fritas", type: "guarnicion", price:100, promo:"1" },
	{ id:0006, name: "Puré de zapallo", type: "guarnicion", price:100, promo:"1" },
	{ id:0007, name: "Flan con crema", type: "postre", price:100, promo:"1" },
	{ id:0008, name: "Queso y dulce", type: "postre", price:100, promo:"1" },
    { id:0009, name: "Mousse de chocolate", type: "postre", price:100, promo:"1" },
    { id:0010, name: "Coca Cola", type: "bebida", price:100, promo:"1" },
    { id:0011, name: "Fanta", type: "bebida", price:100, promo:"1" },
]

element = {
    id:0012,
    name:'Paso de los Toros',
    type:'Bebida',
    price:50,
    promo:'1'
}

//1. identificar tipos de platos
//1.a. extraigo tipos de platos
const allTypes = menu.map(e =>e.type) //o también puedo poner menu.map (({type})=>type)
//1.b. filtro para que los tipos de platos no se repitan
const plateTypes =allTypes.filter((e,i)=> allTypes.indexOf(e) === i)

//2. genero selecs por cada tipo de plato
const createSelects =(list, container) => {
    list.forEach(e=> {
        let select = document.createElement("select")
        select.id=e //le da como id el valor del tipo de plato
        container.appendChild(select)
    })
}

//3. una función para poblar los selects
const fillSelects =list => {
    list.forEach(e=> {
        let select = document.getElementById (e.type) //por como asigné los id, seguro que hay un select cuyo id coincide con mi plato, y es ahí donde quiero poner mi option
        let option = document.createElement("option")
        option.innerText=e.name
        option.id=e.id
        select.appendChild(option)
    })
}

//4. una función que ponga en cada select una opción vacía como placeholder.
const emptyOption = list => {
    list.forEach (e=>{
        let select = document.getElementById(e)
        let option = document.createElement("option")
        option.innerText=`Seleccione ${e}`
        select.appendChild(option)
    })
}


//inicialización del programa
const initialize = () => {
    let mainDiv = document.getElementById("selects")
    createSelects (plateTypes, mainDiv)
    emptyOption(plateTypes)
    fillSelects(menu)
}
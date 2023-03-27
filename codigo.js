//Seleccion el boton "Todos"
const boton_todos=document.querySelector("#boton_todos");
//Seleccion el boton "Desayuno"
const boton_desayuno=document.querySelector("#boton_desayunos");
//Seleccion el boton "Almuerzo"
const boton_almuerzo=document.querySelector("#boton_almuerzos");
//Seleccion el boton "Batidos"
const boton_batido=document.querySelector("#boton_batidos");

//Seleccion todos los alimentos que son desayunos
const desayunos=document.querySelectorAll(".desayuno");
//Seleccion todos los alimentos que son almuerzos
const almuerzos=document.querySelectorAll(".almuerzo");
//Seleccion todos los alimentos que son batidos
const batidos=document.querySelectorAll(".batido")


boton_desayuno.addEventListener("click",()=>
{
        desayunos.forEach((elemento)=>
        {
            elemento.style.display='flex';
        })

        almuerzos.forEach((e)=>
        {
            e.style.display="none";
        })
        
        batidos.forEach((e)=>
        {
            e.style.display="none";
        })

})


boton_almuerzo.addEventListener("click",()=>
{
        desayunos.forEach((elemento)=>
        {
            elemento.style.display='none';
        })

        almuerzos.forEach((e)=>
        {
            e.style.display="flex";
        })

        batidos.forEach((e)=>
        {
            e.style.display="none";
        })
})

boton_batido.addEventListener("click",()=>
{
        desayunos.forEach((elemento)=>
        {
            elemento.style.display='none';
        })

        almuerzos.forEach((e)=>
        {
            e.style.display="none";
        })

        batidos.forEach((e)=>
        {
            e.style.display="flex";
        })
})

boton_todos.addEventListener("click",()=>
{
    desayunos.forEach((elemento)=>
        {
            elemento.style.display='flex';
        })

        almuerzos.forEach((e)=>
        {
            e.style.display="flex";
        })

        batidos.forEach((e)=>
        {
            e.style.display="flex";
        })
})

export default {
    totaldotos(state) {
    	return state.todos.length
    },
    havedo(state) {
    	
        let a=state.todos.filter(function(el, index) {
        	return el.have==true
        })
        return a.length
    },
    nohavedo(state) {
    	let a=state.todos.filter(function(el, index) {
        	return el.have==false
        })
        return a.length
    },
}
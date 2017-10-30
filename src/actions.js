import store from "./store";

export const guardarRespuesta = (value) => {
    let res = [...store.getState().respuestas];
    let index = store.getState().contar;
    let marcar = store.getState().marcar;
    if (marcar) {
        res[index] = value;
        store.setState({
            marcar: false,
            respuestas: res
        })
        let t = setTimeout(() => {
            siguiente();
            store.setState({
                marcar: true
            })
        }, 700);
    }
}

export const siguiente = () => {
    let deepdive = [...store.getState().deepdive];
    let contar = store.getState().contar;
    if (contar === deepdive.length - 1) {
        store.setState({
            complet: true
        });
    }
    contar++;
    store.setState({
        contar: contar
    })
}
export const anterior = () => {
    let deepdive = [...store.getState().deepdive];
    let contar = store.getState().contar;
    if (contar === deepdive.length) {
        store.setState({
            complet: false
        });
    }
    contar--;
    store.setState({
        contar: contar
    })
}
export const obtenerCorrectas = () => {
    let deepdive = [...store.getState().deepdive];
    let respuestas = [...store.getState().respuestas];
    return respuestas.filter((item, index) => item == deepdive[index].respuesta).length;
}
export const comparationRespuestas = () => {
    store.setState({
        comparation: true
    });
}

export const reiniciar = () => {
    store.setState({
        contar: 0,
        comparation: false,
        complet: false,
        respuestas: []
    });
}
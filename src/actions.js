import store from "./store";


export const guardarRespuesta = (value) => {
    let res = [...store.getState().result];
    let index = store.getState().cont;
    let marcar = store.getState().marcar;
    if (marcar) {
        res[index] = value;
        store.setState({
            marcar: false,
            result: res
        })
        let t = setTimeout(() => {
            siguiente();
            store.setState({
                marcar: true
            })
        }, 100);
    }


}

export const siguiente = () => {
    let questions = [...store.getState().answer];
    let cont = store.getState().cont;
    if (cont === questions.length - 1) {
        store.setState({
            completo: true
        });
    }
    cont++;
    store.setState({
        cont: cont
    })
}
export const anterior = () => {
    let questions = [...store.getState().answer];
    let cont = store.getState().cont;
    if (cont === questions.length) {
        store.setState({
            completo: false
        });
    }
    cont--;
    store.setState({
        cont: cont
    })
}
export const obtenerCorrectas = () => {
    let questions = [...store.getState().answer];
    let answers = [...store.getState().answer];
    return answers.filter((item, index) => item == questions[index].answer).length;
}
export const compararRespuestas = () => {
    store.setState({
        comparate: true
    });
}

export const reiniciar = () => {
    store.setState({
        cont: 0,
        comparate: false,
        allcomplete: false,
        result: []
    });
}
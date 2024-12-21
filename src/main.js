import { createApp, h } from 'vue'
import './style.css'

import Layout from './Layout.vue'
import Home from './Home.vue'
import Empresa from './Empresa.vue'
import Servicos from './Servicos.vue'
import Produtos from './Produtos.vue'
import Contatos from './Contatos.vue'

const NotFoundComponent = { template: '<h1>Rota inexistente</h1>' }

function adicionarLayout(pagina) {
  return {
    render() {
      return h(Layout, [
        h(pagina),
      ]);
    }
  };
}

const routes = {
  '': adicionarLayout(Home),
  '/empresa': adicionarLayout(Empresa),
  '/servicos': adicionarLayout(Servicos),
  '/produtos': adicionarLayout(Produtos),
  '/contatos': adicionarLayout(Contatos),
}

const roteadorSimples = {
  data() {
    return {
        rotaAtual: window.location.pathname.replace(/\/$/, '')
    }
  },

  computed: {
    componenteAtual() {
      console.log(this.rotaAtual)
      return routes[this.rotaAtual] || NotFoundComponent
    }
  },

  render() {
    return h(this.componenteAtual)
  }
}

createApp(roteadorSimples).mount('#app')

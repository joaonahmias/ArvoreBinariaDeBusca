class no{
    constructor(chave){
        this.chave=chave
        this.fEsq = null
        this.fDir = null
    }
}

class ArvoreBinariaDeBusca{
    constructor(){
        this.raiz=null
    }

    inserir(chave){
        let novoNo = new no(chave)
        if(this.raiz===null){
            this.raiz=novoNo
        }
        else{
            this.inserirNo(this.raiz,novoNo)
        }
    }

    inserirNo(raiz,no){
        if(no.chave<=raiz.chave){
            if(raiz.fEsq===null){
                raiz.fEsq = no
            }
            else{
                this.inserirNo(raiz.fEsq,no)
            }
        }
        else{
            if(raiz.fDir===null){
                raiz.fDir = no
            }
            else{
                this.inserirNo(raiz.fDir,no)
            }
        }
    }

    acharArvore(raiz=this.raiz,elementos=[]){

        if(raiz===null){
            return []
        }

        elementos.push(raiz.chave)

        if(raiz.fEsq!=null){
            this.acharArvore(raiz.fEsq,elementos)
        }
        if(raiz.fDir!=null){
            this.acharArvore(raiz.fDir,elementos)
        }

        return elementos
    }

    mostrarArvore(){
       return this.acharArvore()
    }

    encontrarMaiorEsq(no){
        while(no!=null&&no.fDir!=null){
            no = no.fDir
        }
        console.log(no.chave)
        return no
    }

    remover(chave){
        this.raiz = this.removerNo(this.raiz,chave)
    }

    removerNo(no,chave){
        if(this.no===null){
            return null
        }

        if(chave<no.chave){
            no.fEsq = this.removerNo(no.fEsq,chave)
            return no
        }
        if(chave>no.chave){
            no.fDir = this.removerNo(no.fDir,chave)
            return no
        }
        else{
            console.log("entrei: "+no.chave)
            if(no.fDir===null&&no.fEsq===null){
                no = null
                return no
            }
            else if(no.fDir===null){
                no = no.fEsq
                return no
            }
            else if(no.fEsq===null){
               no = no.fDir
               return no
            }
            else{
                let maiordosmenores = this.encontrarMaiorEsq(no.fEsq)
                no.chave = maiordosmenores.chave
                console.log("maiordosMaiores: "+no.chave)
                no.fEsq = this.removerNo(no.fEsq,no.chave) 
                return no
            }
           
        }
    }

    altura(){
        if(this.raiz===null){
            return -1
        }
        return this.alturaNo(this.raiz)
    }

    alturaNo(no){
        let alturaEsquerda
        let alturaDireita 
        if(no===null){
            return -1
        }
        else{
            alturaEsquerda = this.alturaNo(no.fEsq)
            alturaDireita = this.alturaNo(no.fDir)
        }

        if(alturaDireita>alturaEsquerda){
            return alturaDireita+1
        }
        else{
            return alturaEsquerda+1
        }
    }

    preOrdem(){
        this.preOrdemNo(this.raiz)
    }

    preOrdemNo(no){
        if(no===null){
            return null
        }
        console.log(no.chave)
        this.preOrdemNo(no.fEsq)
        this.preOrdemNo(no.fDir)
    }

    inOrdem(){
        return this.inOrdemNo(this.raiz)
    }


    inOrdemNo(no){
        if(no===null){
            return null
        }
        this.inOrdemNo(no.fEsq)
        console.log(no.chave)
        this.inOrdemNo(no.fDir)
    }

    posOrdem(){
        return this.posOrdemNo(this.raiz)
    }

    posOrdemNo(no){
        if(no===null){
            return null
        }
        this.posOrdemNo(no.fEsq)
        this.posOrdemNo(no.fDir)
        console.log(no.chave)
    }
}

let arvore = new ArvoreBinariaDeBusca()
arvore.inserir(10);
arvore.inserir(40);
arvore.inserir(5);
arvore.inserir(4);
arvore.inserir(80);
arvore.inserir(90);
arvore.mostrarArvore();
arvore.remover(10);
arvore.mostrarArvore();
arvore.altura()
arvore.preOrdem()
arvore.inOrdem()
arvore.posOrdem()



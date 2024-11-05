"use client"
import { Formulario } from "@/components/Formulario/Formulario";
import styles from "@/app/orcamento/page.module.css"
import { Card } from "@/components/Card/Card";
import freio from "@/assets/freio_carro.jpg"
import vela from "@/assets/vela_ignicao.jpg"
import bateria from "@/assets/bateria_carro.jpeg"
import { useState } from "react";
import { TipoProduto } from "@/types/Types";

export default function Orcamento(){
    
    const apiKey =  process.env.NEXT_PUBLIC_GUARDIAN_KEY || "";

    const [orcamento, setOrcamento] = useState<TipoProduto>({
        descricaoProblema: ""
    })

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evento.target
        setOrcamento({...orcamento, [name]:value})
    }

    const handleSubmit = async(evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault()
        console.log("enviou")

        try{
            const response = await fetch(apiKey, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(orcamento)
            })

            if (response.ok) {
                alert("Recebemos seu problema! ")
                setOrcamento({
                    descricaoProblema: ""
                })
            }

    } catch (error) {
        console.error("Falha na descrição: ", error)
    }
    }

    return(
        <>
        <main className={styles.main}>

            <div className={styles.div_problema}>
                <h1 className={styles.problema}>Peças que normalmente dão problemas</h1>
                <Card imagemCriador={freio} texto1="Disco de freio" texto2="Valor: R$150 a R$500 cada" />
                <Card imagemCriador={vela} texto1="Vela de ignição" texto2="Valor: R$20 a R$50 cada" />
                <Card imagemCriador={bateria} texto1="Bateria de carros" texto2="Valor: R$300 a R$600" />
            </div>

            <Formulario titulo='Faça seu orçamento'>
                <form onSubmit={handleSubmit}>
                    <div className={styles.div_form}>
                        <input
                            type="text"
                            name="descricao_problema"
                            // value={orcamento.descricaoProblema}
                            onChange={(evento) => handleChange(evento)}
                            placeholder="   Descreva o problema"
                            required
                            className={styles.input}
                            />
                    </div>
                    <div className={styles.div_form}>
                        <button type="submit" className={styles.button}>Analisar</button>
                    </div>
                </form>
            </Formulario>
        
        </main>
        </>
    )
}
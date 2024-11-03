"use client"

import React, { useState } from 'react';
import{ Formulario } from "@/components/Formulario/Formulario"
import styles from "@/components/Cadastro/Cadastro.module.css"

const CadastroCliente: React.FC = () => {
    const [cpf, setCpf] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string>('');

    const validateCPF = (cpf: string): boolean => {
        const cleanedCPF = cpf.replace(/\D/g, '');
        return cleanedCPF.length === 11 && /^\d+$/.test(cleanedCPF);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateCPF(cpf)) {
            setError('Por favor, insira um CPF válido (11 dígitos).');
            return;
        }

        console.log('Cadastro realizado com sucesso!');
        console.log('CPF:', cpf);
        console.log('Senha:', senha);

        setCpf('');
        setSenha('');
        setError('');
    };

    return (
        <Formulario titulo='Cadastro de clientes'>
             <form onSubmit={handleSubmit} className={styles.a}>
                <div className={styles.div_form}>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="   Digite seu CPF"
                        className={styles.input}
                    />
                </div>
                <div className={styles.div_form}>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="   Digite sua senha"
                        className={styles.input}
                    />
                </div>
                {error && <p className={styles.erro}>{error}</p>}
                <div className={styles.div_form}>
                    <button type="submit" className={styles.button}>Cadastrar</button>
                </div>
            </form>
        </Formulario>
    );
};

export default CadastroCliente;

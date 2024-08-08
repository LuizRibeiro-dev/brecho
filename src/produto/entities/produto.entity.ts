import { IsNotEmpty, IsNumber } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Transform, TransformFnParams } from "class-transformer";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;
    
    /*@Transform(({ value }: TransformFnParams) => value?.trim())*/
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({type: "varchar", length: 4, nullable: false})
    tamanho: string

    @IsNotEmpty()
    @Column({length: 2000, nullable: false})
    foto: string

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2})
    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
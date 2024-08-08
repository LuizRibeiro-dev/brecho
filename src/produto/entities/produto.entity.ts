import { IsNotEmpty, IsNumber } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Transform, TransformFnParams } from "class-transformer";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_produtos"})
export class Produto {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    /*@Transform(({ value }: TransformFnParams) => value?.trim())*/
    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({type: "varchar", length: 4, nullable: false})
    tamanho: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 2000, nullable: false})
    foto: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2})
    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number
    
    @ApiProperty({ type: () => Categoria})
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}
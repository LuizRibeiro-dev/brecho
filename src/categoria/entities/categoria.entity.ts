import { IsNotEmpty } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    tipo: string
    
    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}
export abstract class CreateNode {
  value: number
  operator: string
  left: CreateNode | null
  right: CreateNode | null

  constructor(
    value: number,
    operator: string,
    left: CreateNode | null,
    right: CreateNode | null
  ) 
  {
    this.value = value
    this.operator = operator
    this.left = left
    this.right = right
  }

  abstract evaluate(): number
}
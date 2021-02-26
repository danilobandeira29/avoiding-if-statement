export class CreateNode {
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

  evaluate(): number {
    switch(this.operator) {
      case '#':
        return this.value
      case '+':
        if(this.left && this.right) {
          return this.left.evaluate() + this.right.evaluate()
        }
      case '*':
        if(this.left && this.right) {
          return this.left.evaluate() * this.right.evaluate()
        } 
      default:
        return 0
    }
  }
}
import { CreateNode } from "./CreateNode"

export class ValueNode extends CreateNode {
  value: number

  constructor(value: number) {
    super()
    this.value = value
  }

  evaluate(): number {
    return this.value
  }
}
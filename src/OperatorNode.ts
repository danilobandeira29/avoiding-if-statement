import { CreateNode } from "./CreateNode";
import { ValueNode } from './ValueNode'

export abstract class OperatorNode extends CreateNode {
  operator: string
  left: ValueNode | OperatorNode
  right: ValueNode | OperatorNode

  constructor(operator: string, left: ValueNode | OperatorNode, right: ValueNode | OperatorNode) {
    super()
    this.operator = operator
    this.left = left
    this.right = right
  }

  abstract evaluate(): number
}
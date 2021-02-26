import { OperatorNode } from "./OperatorNode";
import { ValueNode } from './ValueNode'

export class MultiplicateOperator extends OperatorNode {
  constructor(left: ValueNode, right: ValueNode) {
    super('*', left, right)
  }

  evaluate(): number {
    if(this.left && this.right) {
      return this.left.evaluate() * this.right.evaluate()
    }
    return 0
  }
}
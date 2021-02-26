import { OperatorNode } from "./OperatorNode";
import { ValueNode } from './ValueNode'

export class AddOperator extends OperatorNode {
  constructor(left: ValueNode | OperatorNode, right: ValueNode | OperatorNode) {
    super('+', left, right)
  }

  evaluate(): number {
    if(this.left && this.right) {
      return this.left.evaluate() + this.right.evaluate()
    }
    return 0
  }
}
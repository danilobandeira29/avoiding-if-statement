import { OperatorNode } from "./OperatorNode";

export class AddOperator extends OperatorNode {
  constructor(left: OperatorNode, right: OperatorNode) {
    super('+', left, right)
  }

  evaluate(): number {
    if(this.left && this.right) {
      return this.left.evaluate() + this.right.evaluate()
    }
    return 0
  }
}
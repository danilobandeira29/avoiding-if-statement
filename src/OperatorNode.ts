import { CreateNode } from "./CreateNode";

export abstract class OperatorNode extends CreateNode {
  constructor(operator: string, left: OperatorNode, right: OperatorNode) {
    super(0, operator, left, right)
  }

  abstract evaluate(): number
}
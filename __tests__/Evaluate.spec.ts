import { ValueNode } from '../src/ValueNode'
import { AddOperator } from '../src/AddOperator'
import { MultiplicateOperator } from '../src/MultiplicateOperator'

describe('Evaluate', () => {
  it('should be able to evaluate an math operation', () => {
    const value = new ValueNode(2)
    const valueLeftNode = new ValueNode(10)
    const valueRightNode = new ValueNode(5)
    const right = new MultiplicateOperator(valueLeftNode, valueRightNode)
    const root = new AddOperator(value, right)
    
    expect(root.evaluate()).toBe(52)
  })
})
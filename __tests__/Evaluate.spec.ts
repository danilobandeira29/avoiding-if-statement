import { CreateNode } from '../src/CreateNode'

describe('Evaluate', () => {
  it('should be able to evaluate an math operation', () => {
    const value = 0
    const operation = '+'
    const left = new CreateNode(2, '#', null, null)
    const leftNode = new CreateNode(10, '#', null, null)
    const rightNode = new CreateNode(5, '#', null, null)
    const right = new CreateNode(0, '*', leftNode, rightNode)
    const root = new CreateNode(value, operation, left, right)
    

    expect(root.evaluate()).toBe(52)
  })
})
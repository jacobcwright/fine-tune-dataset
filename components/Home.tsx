'use client'
import { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Separator } from './ui/separator'

export const Home = () => {
  const [description, setDescription] = useState('')
  const [exampleOne, setExampleOne] = useState('')
  const [exampleTwo, setExampleTwo] = useState('')
  const [exampleThree, setExampleThree] = useState('')

  return (
    <div className='p-24 flex flex-col h-full w-full pt-0'>
      <form className='flex flex-col gap-8 w-full h-full'>
        <a
          href='https://platform.openai.com/docs/guides/fine-tuning'
          target='_blank'
        >
          Learn about fine-tuning <u>here</u>
        </a>
        <Separator />
        <Label>Dataset Description</Label>
        <Input
          type='text'
          placeholder={`The chatbot's name is Marv. He is factual, but sarcastic.`}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <Label>Example 1 (JSON)</Label>
        <Textarea
          placeholder={example1}
          value={exampleOne}
          className=''
          onChange={(e) => {
            setExampleOne(e.target.value)
          }}
        />
        <Label>Example 2 (JSON)</Label>
        <Textarea
          placeholder={example2}
          value={exampleTwo}
          className=''
          onChange={(e) => {
            setExampleTwo(e.target.value)
          }}
        />
        <Label>Example 3 (JSON)</Label>
        <Textarea
          placeholder={example3}
          value={exampleThree}
          className=''
          onChange={(e) => {
            setExampleThree(e.target.value)
          }}
        />
      </form>
    </div>
  )
}

const example1 = `{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "What's the capital of France?"}, {"role": "assistant", "content": "Paris, as if everyone doesn't know that already."}]}`
const example2 = `{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "Who wrote 'Romeo and Juliet'?"}, {"role": "assistant", "content": "Oh, just some guy named William Shakespeare. Ever heard of him?"}]}`
const example3 = `{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "How far is the Moon from Earth?"}, {"role": "assistant", "content": "Around 384,400 kilometers. Give or take a few, like that really matters."}]}`

import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => <h1 className='text-5xl my-6'>{children}</h1>,
    h2: ({children}) => <h1 className='text-4xl'>{children}</h1>,
    h3: ({children}) => <h1 className='text-3xl'>{children}</h1>,
    ...components,
  }
}

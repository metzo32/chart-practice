import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export const Button = styled.button<{ $active: boolean }>`                                                                                                                        
    width: 200px;                          
    height: 40px;                        
    border: none;                                                                                                                                                            
    border-radius: 5px;
    color: ${theme.colors.surface};                                                                                                                                          
    background-color: ${({ $active }) => $active ? theme.colors.primary : theme.colors.border};
    cursor: pointer;                                                                                                                                                         
  `

export const SubmitButton = styled.button`
    width: 200px;                          
    height: 40px;                        
    border: none;                                                                                                                                                            
    border-radius: 5px;
    color: ${theme.colors.surface};    
    background-color: ${theme.colors.primary};
    cursor: pointer;        
  `
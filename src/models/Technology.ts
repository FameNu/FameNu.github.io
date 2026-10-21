export type TechnologyIcon =
  | { type: 'fontawesome'; value: string }
  | { type: 'image'; value: string }

export interface Technology {
  name: string
  icon: TechnologyIcon
  iconColor: string
  textColor: string
  backgroundColor: string
  backgroundOpacity: number
}

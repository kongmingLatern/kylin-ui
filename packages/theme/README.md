# Kylin-UI theme

## Instroduction

This is a plan for style customization of Kylin-UI.

## TODO

### CSS Design

Now I have a thought about how to customize the style of Kylin-UI.

You can use the `bg` attribute to customize the background color of the component.

```tsx
<Button type="primary" bg="blue-500" color="white"></Button>
```

Equal to

```tsx
<Button
	type="primary"
	className="bg-blue-500 color-white"
></Button>
```

And you can use the same prefix to customize the style of the component.

```tsx
<Button type="primary" font="bold mono"></Button>
```

Equal to

```tsx
<Button
	type="primary"
	className="font-bold font-mono"
></Button>
```

## Install

```bash
  npm install @kylin-ui/theme
```

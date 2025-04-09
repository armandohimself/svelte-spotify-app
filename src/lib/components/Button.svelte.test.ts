import { Button, ButtonTestWrapper } from '$components';
import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, test, vi } from 'vitest';

describe('Button', () => {
	//! Element Rendering
	test('renders a <button> by default', () => {
		const { container } = render(Button, { props: { element: 'button' } });

		expect(container.querySelector('button')).toBeInTheDocument();
	});

	test('renders an <a> tag if element is "a"', () => {
		const { container } = render(Button, { props: { element: 'a' } });

		expect(container.querySelector('a')).toBeInTheDocument();
	});

	//! Applies Variant Class
	test('applies the solid variant class by default', () => {
		const { container } = render(Button, { props: { element: 'button' } });
		const el = container.querySelector('button');
		expect(el?.className).toContain('button-solid');
	});

	test('applies the outline variant class', () => {
		const { container } = render(Button, { props: { element: 'button', variant: 'outline' } });
		const el = container.querySelector('button');
		expect(el?.className).toContain('button-outline');
	});

	//! Accepts & Renders Custom ClassName
	test('applies additional class name from props', () => {
		const { container } = render(Button, {
			props: { element: 'button', className: 'custom-class' }
		});

		const el = container.querySelector('button');

		expect(el?.className).toContain('custom-class');
	});

	/**
	 * allowedOptions = ['target','anchor','props','events','context','intro',]
	 * <Slot> is deprecated and workout I used was to create a wrapper component with the words 'Click me' in place of the slot
	 */

	//! Renders Slot Content
	test('renders the slot content', () => {
		const { getByText } = render(ButtonTestWrapper, {
			props: { element: 'button' }
		});
		expect(getByText('Click me')).toBeInTheDocument();
	});

	//! Handle Click Events
	test('fires click event', async () => {
		const handleClick = vi.fn();

		const { getByText } = render(ButtonTestWrapper, {
			props: { element: 'button', onclick: handleClick }
		});

		const btn = getByText('Click me');

		await fireEvent.click(btn);

		expect(handleClick).toHaveBeenCalled();
	});

	//! Disable Button
	test('disables the button', () => {
		const { getByRole } = render(Button, {
			props: { element: 'button', disabled: true }
		});
		expect(getByRole('button')).toBeDisabled();
	});
});

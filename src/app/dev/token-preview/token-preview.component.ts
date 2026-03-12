import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TokenDependency = {
  label: string;
  value: string;
};

type TokenItem = {
  name: string;
  value: string;
  kind?: 'solid' | 'alpha';
  dependencies?: TokenDependency[];
  swatchClass?: string;
};

type TokenSection = {
  title: string;
  description?: string;
  tokens: TokenItem[];
};

@Component({
  selector: 'app-token-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token-preview.component.html',
  styleUrl: './token-preview.component.scss',
})
export class TokenPreviewComponent {
  readonly darkSections: TokenSection[] = [
    {
      title: 'Semantic · Role background',
      tokens: [
        { name: '$role-bg-canvas', value: '#09090B', swatchClass: 'swatch-role-bg-canvas', dependencies: [{ label: 'Foundation', value: 'color.surface.background' }, { label: 'Palette', value: '$zinc-950' }, { label: 'HEX', value: '#09090B' }] },
        { name: '$role-bg-surface', value: '#18181B', swatchClass: 'swatch-role-bg-surface', dependencies: [{ label: 'Foundation', value: 'color.surface.surface' }, { label: 'Palette', value: '$zinc-900' }, { label: 'HEX', value: '#18181B' }] },
        { name: '$role-bg-surface-alt', value: '#27272A', swatchClass: 'swatch-role-bg-surface-alt', dependencies: [{ label: 'Foundation', value: 'color.surface.surfaceContainer' }, { label: 'Palette', value: '$zinc-800' }, { label: 'HEX', value: '#27272A' }] },
        { name: '$role-bg-surface-elevated', value: '#3F3F46', swatchClass: 'swatch-role-bg-surface-elevated', dependencies: [{ label: 'Foundation', value: 'color.surface.surfaceContainerHigh' }, { label: 'Palette', value: '$zinc-700' }, { label: 'HEX', value: '#3F3F46' }] },
        { name: '$role-bg-action-primary', value: '#2563EB', swatchClass: 'swatch-role-bg-action-primary', dependencies: [{ label: 'Foundation', value: 'color.primary.primary' }, { label: 'Palette', value: '$blue-600' }, { label: 'HEX', value: '#2563EB' }] },
        { name: '$role-bg-error', value: '#B91C1C', swatchClass: 'swatch-role-bg-error', dependencies: [{ label: 'Foundation', value: 'color.error.errorContainer' }, { label: 'Palette', value: '$red-700' }, { label: 'HEX', value: '#B91C1C' }] },
        { name: '$role-bg-success', value: '#22C55E', swatchClass: 'swatch-role-bg-success', dependencies: [{ label: 'Foundation', value: 'color.states.success' }, { label: 'Palette', value: '$green-500' }, { label: 'HEX', value: '#22C55E' }] },
        { name: '$role-bg-warning', value: '#F97316', swatchClass: 'swatch-role-bg-warning', dependencies: [{ label: 'Foundation', value: 'color.states.warning' }, { label: 'Palette', value: '$orange-500' }, { label: 'HEX', value: '#F97316' }] },
        { name: '$role-bg-alert', value: '#FACC15', swatchClass: 'swatch-role-bg-alert', dependencies: [{ label: 'Foundation', value: 'color.states.alert' }, { label: 'Palette', value: '$yellow-400' }, { label: 'HEX', value: '#FACC15' }] },
        { name: '$role-bg-info', value: '#164E63', swatchClass: 'swatch-role-bg-info', dependencies: [{ label: 'Foundation', value: 'color.tertiary.tertiaryContainer' }, { label: 'Palette', value: '$cyan-900' }, { label: 'HEX', value: '#164E63' }] },
        { name: '$role-bg-inverse', value: '#F4F4F5', swatchClass: 'swatch-role-bg-inverse', dependencies: [{ label: 'Foundation', value: 'color.inverse.inverseSurface' }, { label: 'Palette', value: '$zinc-100' }, { label: 'HEX', value: '#F4F4F5' }] },
      ],
    },
    {
      title: 'Semantic · Role text',
      tokens: [
        { name: '$role-text-primary', value: '#FAFAFA', swatchClass: 'swatch-role-text-primary', dependencies: [{ label: 'Foundation', value: 'color.surface.onSurface' }, { label: 'Palette', value: '$zinc-50' }, { label: 'HEX', value: '#FAFAFA' }] },
        { name: '$role-text-secondary', value: '#9F9FA9', swatchClass: 'swatch-role-text-secondary', dependencies: [{ label: 'Foundation', value: 'color.surface.onSurfaceVariant' }, { label: 'Palette', value: '$zinc-400' }, { label: 'HEX', value: '#9F9FA9' }] },
        { name: '$role-text-inverse', value: '#09090B', swatchClass: 'swatch-role-text-inverse', dependencies: [{ label: 'Foundation', value: 'color.inverse.inverseOnSurface' }, { label: 'Palette', value: '$zinc-950' }, { label: 'HEX', value: '#09090B' }] },
        { name: '$role-text-action-primary', value: '#3B82F6', swatchClass: 'swatch-role-text-action-primary', dependencies: [{ label: 'Foundation', value: 'color.primary.primaryFixed' }, { label: 'Palette', value: '$blue-500' }, { label: 'HEX', value: '#3B82F6' }] },
        { name: '$role-text-on-action-primary', value: '#FFFFFF', swatchClass: 'swatch-role-text-on-action-primary', dependencies: [{ label: 'Foundation', value: 'color.primary.onPrimary' }, { label: 'Palette', value: '$white' }, { label: 'HEX', value: '#FFFFFF' }] },
        { name: '$role-text-error', value: '#EF4444', swatchClass: 'swatch-role-text-error', dependencies: [{ label: 'Foundation', value: 'color.error.error' }, { label: 'Palette', value: '$red-500' }, { label: 'HEX', value: '#EF4444' }] },
        { name: '$role-text-on-error', value: '#FFFFFF', swatchClass: 'swatch-role-text-on-error', dependencies: [{ label: 'Foundation', value: 'color.error.onError' }, { label: 'Palette', value: '$white' }, { label: 'HEX', value: '#FFFFFF' }] },
        { name: '$role-text-success', value: '#22C55E', swatchClass: 'swatch-role-text-success', dependencies: [{ label: 'Foundation', value: 'color.states.success' }, { label: 'Palette', value: '$green-500' }, { label: 'HEX', value: '#22C55E' }] },
        { name: '$role-text-warning', value: '#F97316', swatchClass: 'swatch-role-text-warning', dependencies: [{ label: 'Foundation', value: 'color.states.warning' }, { label: 'Palette', value: '$orange-500' }, { label: 'HEX', value: '#F97316' }] },
        { name: '$role-text-info', value: '#22D3EE', swatchClass: 'swatch-role-text-info', dependencies: [{ label: 'Foundation', value: 'color.states.info' }, { label: 'Palette', value: '$cyan-400' }, { label: 'HEX', value: '#22D3EE' }] },
      ],
    },
    {
      title: 'Semantic · Role border',
      tokens: [
        { name: '$role-border-default', value: '#3F3F46', swatchClass: 'swatch-role-border-default', dependencies: [{ label: 'Foundation', value: 'color.outline.outline' }, { label: 'Palette', value: '$zinc-700' }, { label: 'HEX', value: '#3F3F46' }] },
        { name: '$role-border-subtle', value: '#27272A', swatchClass: 'swatch-role-border-subtle', dependencies: [{ label: 'Foundation', value: 'color.outline.outlineVariant' }, { label: 'Palette', value: '$zinc-800' }, { label: 'HEX', value: '#27272A' }] },
        { name: '$role-border-selected', value: '#3B82F6', swatchClass: 'swatch-role-border-selected', dependencies: [{ label: 'Foundation', value: 'color.primary.primaryFixed' }, { label: 'Palette', value: '$blue-500' }, { label: 'HEX', value: '#3B82F6' }] },
        { name: '$role-border-error', value: '#EF4444', swatchClass: 'swatch-role-border-error', dependencies: [{ label: 'Foundation', value: 'color.error.error' }, { label: 'Palette', value: '$red-500' }, { label: 'HEX', value: '#EF4444' }] },
        { name: '$role-border-success', value: '#22C55E', swatchClass: 'swatch-role-border-success', dependencies: [{ label: 'Foundation', value: 'color.states.success' }, { label: 'Palette', value: '$green-500' }, { label: 'HEX', value: '#22C55E' }] },
        { name: '$role-border-warning', value: '#F97316', swatchClass: 'swatch-role-border-warning', dependencies: [{ label: 'Foundation', value: 'color.states.warning' }, { label: 'Palette', value: '$orange-500' }, { label: 'HEX', value: '#F97316' }] },
        { name: '$role-border-info', value: '#22D3EE', swatchClass: 'swatch-role-border-info', dependencies: [{ label: 'Foundation', value: 'color.states.info' }, { label: 'Palette', value: '$cyan-400' }, { label: 'HEX', value: '#22D3EE' }] },
      ],
    },
    {
      title: 'Semantic · State alpha',
      description: 'Shown on checkerboard so transparency is visible.',
      tokens: [
        { name: '$state-interaction-hover', value: 'rgba(250, 250, 250, 0.04)', kind: 'alpha', swatchClass: 'swatch-state-interaction-hover', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.004' }, { label: 'Palette', value: '$zinc-50 @ 4%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.04)' }] },
        { name: '$state-interaction-pressed', value: 'rgba(250, 250, 250, 0.08)', kind: 'alpha', swatchClass: 'swatch-state-interaction-pressed', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.008' }, { label: 'Palette', value: '$zinc-50 @ 8%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.08)' }] },
        { name: '$state-interaction-focus', value: 'rgba(250, 250, 250, 0.12)', kind: 'alpha', swatchClass: 'swatch-state-interaction-focus', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.012' }, { label: 'Palette', value: '$zinc-50 @ 12%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.12)' }] },
        { name: '$state-interaction-selected', value: 'rgba(37, 99, 235, 0.2)', kind: 'alpha', swatchClass: 'swatch-state-interaction-selected', dependencies: [{ label: 'Foundation', value: 'color.alpha.primary.020' }, { label: 'Palette', value: '$blue-600 @ 20%' }, { label: 'HEX', value: 'rgba(37, 99, 235, 0.2)' }] },
        { name: '$state-disabled-bg', value: 'rgba(250, 250, 250, 0.12)', kind: 'alpha', swatchClass: 'swatch-state-disabled-bg', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.012' }, { label: 'Palette', value: '$zinc-50 @ 12%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.12)' }] },
        { name: '$state-disabled-border', value: 'rgba(250, 250, 250, 0.12)', kind: 'alpha', swatchClass: 'swatch-state-disabled-border', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.012' }, { label: 'Palette', value: '$zinc-50 @ 12%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.12)' }] },
        { name: '$state-disabled-content', value: 'rgba(250, 250, 250, 0.38)', kind: 'alpha', swatchClass: 'swatch-state-disabled-content', dependencies: [{ label: 'Foundation', value: 'color.alpha.onSurface.038' }, { label: 'Palette', value: '$zinc-50 @ 38%' }, { label: 'HEX', value: 'rgba(250, 250, 250, 0.38)' }] },
      ],
    },
    {
      title: 'Foundation · Dark util surface',
      tokens: [
        { name: 'util.surface.amber', value: '#451A03', swatchClass: 'swatch-util-surface-amber', dependencies: [{ label: 'Palette', value: '$amber-950' }, { label: 'HEX', value: '#451A03' }] },
        { name: 'util.surface.blue', value: '#172554', swatchClass: 'swatch-util-surface-blue', dependencies: [{ label: 'Palette', value: '$blue-950' }, { label: 'HEX', value: '#172554' }] },
        { name: 'util.surface.cyan', value: '#083344', swatchClass: 'swatch-util-surface-cyan', dependencies: [{ label: 'Palette', value: '$cyan-950' }, { label: 'HEX', value: '#083344' }] },
        { name: 'util.surface.fuchsia', value: '#4A044E', swatchClass: 'swatch-util-surface-fuchsia', dependencies: [{ label: 'Palette', value: '$fuchsia-950' }, { label: 'HEX', value: '#4A044E' }] },
        { name: 'util.surface.green', value: '#052E16', swatchClass: 'swatch-util-surface-green', dependencies: [{ label: 'Palette', value: '$green-950' }, { label: 'HEX', value: '#052E16' }] },
        { name: 'util.surface.indigo', value: '#1E1B4B', swatchClass: 'swatch-util-surface-indigo', dependencies: [{ label: 'Palette', value: '$indigo-950' }, { label: 'HEX', value: '#1E1B4B' }] },
        { name: 'util.surface.lime', value: '#1A2E05', swatchClass: 'swatch-util-surface-lime', dependencies: [{ label: 'Palette', value: '$lime-950' }, { label: 'HEX', value: '#1A2E05' }] },
        { name: 'util.surface.orange', value: '#431407', swatchClass: 'swatch-util-surface-orange', dependencies: [{ label: 'Palette', value: '$orange-950' }, { label: 'HEX', value: '#431407' }] },
        { name: 'util.surface.pink', value: '#500724', swatchClass: 'swatch-util-surface-pink', dependencies: [{ label: 'Palette', value: '$pink-950' }, { label: 'HEX', value: '#500724' }] },
        { name: 'util.surface.purple', value: '#271051', swatchClass: 'swatch-util-surface-purple', dependencies: [{ label: 'Palette', value: '$purple-950' }, { label: 'HEX', value: '#271051' }] },
        { name: 'util.surface.red', value: '#450A0A', swatchClass: 'swatch-util-surface-red', dependencies: [{ label: 'Palette', value: '$red-950' }, { label: 'HEX', value: '#450A0A' }] },
        { name: 'util.surface.rose', value: '#4C0519', swatchClass: 'swatch-util-surface-rose', dependencies: [{ label: 'Palette', value: '$rose-950' }, { label: 'HEX', value: '#4C0519' }] },
        { name: 'util.surface.sky', value: '#082F49', swatchClass: 'swatch-util-surface-sky', dependencies: [{ label: 'Palette', value: '$sky-950' }, { label: 'HEX', value: '#082F49' }] },
        { name: 'util.surface.teal', value: '#042F2E', swatchClass: 'swatch-util-surface-teal', dependencies: [{ label: 'Palette', value: '$teal-950' }, { label: 'HEX', value: '#042F2E' }] },
        { name: 'util.surface.violet', value: '#2E1065', swatchClass: 'swatch-util-surface-violet', dependencies: [{ label: 'Palette', value: '$violet-950' }, { label: 'HEX', value: '#2E1065' }] },
        { name: 'util.surface.yellow', value: '#422006', swatchClass: 'swatch-util-surface-yellow', dependencies: [{ label: 'Palette', value: '$yellow-950' }, { label: 'HEX', value: '#422006' }] },
        { name: 'util.surface.zinc', value: '#09090B', swatchClass: 'swatch-util-surface-zinc', dependencies: [{ label: 'Palette', value: '$zinc-950' }, { label: 'HEX', value: '#09090B' }] },
      ],
    },
    {
      title: 'Foundation · Dark util content',
      tokens: [
        { name: 'util.content.amber', value: '#FBBF24', swatchClass: 'swatch-util-content-amber', dependencies: [{ label: 'Palette', value: '$amber-400' }, { label: 'HEX', value: '#FBBF24' }] },
        { name: 'util.content.blue', value: '#60A5FA', swatchClass: 'swatch-util-content-blue', dependencies: [{ label: 'Palette', value: '$blue-400' }, { label: 'HEX', value: '#60A5FA' }] },
        { name: 'util.content.cyan', value: '#22D3EE', swatchClass: 'swatch-util-content-cyan', dependencies: [{ label: 'Palette', value: '$cyan-400' }, { label: 'HEX', value: '#22D3EE' }] },
        { name: 'util.content.fuchsia', value: '#E879F9', swatchClass: 'swatch-util-content-fuchsia', dependencies: [{ label: 'Palette', value: '$fuchsia-400' }, { label: 'HEX', value: '#E879F9' }] },
        { name: 'util.content.green', value: '#4ADE80', swatchClass: 'swatch-util-content-green', dependencies: [{ label: 'Palette', value: '$green-400' }, { label: 'HEX', value: '#4ADE80' }] },
        { name: 'util.content.indigo', value: '#818CF8', swatchClass: 'swatch-util-content-indigo', dependencies: [{ label: 'Palette', value: '$indigo-400' }, { label: 'HEX', value: '#818CF8' }] },
        { name: 'util.content.lime', value: '#A3E635', swatchClass: 'swatch-util-content-lime', dependencies: [{ label: 'Palette', value: '$lime-400' }, { label: 'HEX', value: '#A3E635' }] },
        { name: 'util.content.orange', value: '#FB923C', swatchClass: 'swatch-util-content-orange', dependencies: [{ label: 'Palette', value: '$orange-400' }, { label: 'HEX', value: '#FB923C' }] },
        { name: 'util.content.pink', value: '#F472B6', swatchClass: 'swatch-util-content-pink', dependencies: [{ label: 'Palette', value: '$pink-400' }, { label: 'HEX', value: '#F472B6' }] },
        { name: 'util.content.purple', value: '#C084FC', swatchClass: 'swatch-util-content-purple', dependencies: [{ label: 'Palette', value: '$purple-400' }, { label: 'HEX', value: '#C084FC' }] },
        { name: 'util.content.red', value: '#F87171', swatchClass: 'swatch-util-content-red', dependencies: [{ label: 'Palette', value: '$red-400' }, { label: 'HEX', value: '#F87171' }] },
        { name: 'util.content.rose', value: '#FB7185', swatchClass: 'swatch-util-content-rose', dependencies: [{ label: 'Palette', value: '$rose-400' }, { label: 'HEX', value: '#FB7185' }] },
        { name: 'util.content.sky', value: '#38BDF8', swatchClass: 'swatch-util-content-sky', dependencies: [{ label: 'Palette', value: '$sky-400' }, { label: 'HEX', value: '#38BDF8' }] },
        { name: 'util.content.teal', value: '#2DD4BF', swatchClass: 'swatch-util-content-teal', dependencies: [{ label: 'Palette', value: '$teal-400' }, { label: 'HEX', value: '#2DD4BF' }] },
        { name: 'util.content.violet', value: '#A78BFA', swatchClass: 'swatch-util-content-violet', dependencies: [{ label: 'Palette', value: '$violet-400' }, { label: 'HEX', value: '#A78BFA' }] },
        { name: 'util.content.yellow', value: '#FACC15', swatchClass: 'swatch-util-content-yellow', dependencies: [{ label: 'Palette', value: '$yellow-400' }, { label: 'HEX', value: '#FACC15' }] },
        { name: 'util.content.zinc', value: '#9F9FA9', swatchClass: 'swatch-util-content-zinc', dependencies: [{ label: 'Palette', value: '$zinc-400' }, { label: 'HEX', value: '#9F9FA9' }] },
      ],
    },
  ];

  trackByTokenName(_index: number, token: TokenItem): string {
    return token.name;
  }
}

import React, { useState } from 'react';

// ============================================================
// ALTITUDE DESIGN SYSTEM v1.0
// Framework-agnostic tokens for Greenlight, Elementor, and Figma
// 8px Grid System | Light Mode | WordPress Ready
// ============================================================

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState('typography');
  const [typeScale, setTypeScale] = useState('majorThird');

  // ============ TYPOGRAPHY DATA ============
  const typographyTokens = {
    majorSecond: {
      ratio: 1.125,
      label: 'Major Second (1.125) - Conservative',
      tokens: [
        { token: '--font-size-2xs', clamp: 'clamp(0.625rem, 0.56rem + 0.28vw, 0.75rem)', mobile: '10px', desktop: '12px', semantic: 'caption, overline' },
        { token: '--font-size-xs', clamp: 'clamp(0.75rem, 0.68rem + 0.31vw, 0.875rem)', mobile: '12px', desktop: '14px', semantic: 'small, label' },
        { token: '--font-size-sm', clamp: 'clamp(0.875rem, 0.81rem + 0.35vw, 1rem)', mobile: '14px', desktop: '16px', semantic: 'body-small' },
        { token: '--font-size-md', clamp: 'clamp(1rem, 0.93rem + 0.39vw, 1.125rem)', mobile: '16px', desktop: '18px', semantic: 'body, paragraph' },
        { token: '--font-size-lg', clamp: 'clamp(1.125rem, 1.04rem + 0.44vw, 1.25rem)', mobile: '18px', desktop: '20px', semantic: 'lead, intro' },
        { token: '--font-size-xl', clamp: 'clamp(1.25rem, 1.16rem + 0.49vw, 1.5rem)', mobile: '20px', desktop: '24px', semantic: 'h6, subheading' },
        { token: '--font-size-2xl', clamp: 'clamp(1.5rem, 1.39rem + 0.56vw, 1.75rem)', mobile: '24px', desktop: '28px', semantic: 'h5' },
        { token: '--font-size-3xl', clamp: 'clamp(1.75rem, 1.62rem + 0.63vw, 2rem)', mobile: '28px', desktop: '32px', semantic: 'h4' },
        { token: '--font-size-4xl', clamp: 'clamp(2rem, 1.85rem + 0.7vw, 2.25rem)', mobile: '32px', desktop: '36px', semantic: 'h3' },
        { token: '--font-size-5xl', clamp: 'clamp(2.25rem, 2.08rem + 0.78vw, 2.5rem)', mobile: '36px', desktop: '40px', semantic: 'h2' },
        { token: '--font-size-6xl', clamp: 'clamp(2.5rem, 2.31rem + 0.85vw, 3rem)', mobile: '40px', desktop: '48px', semantic: 'h1, hero' },
      ]
    },
    majorThird: {
      ratio: 1.25,
      label: 'Major Third (1.25) - Expressive',
      tokens: [
        { token: '--font-size-2xs', clamp: 'clamp(0.5rem, 0.43rem + 0.39vw, 0.8rem)', mobile: '8px', desktop: '13px', semantic: 'caption, overline' },
        { token: '--font-size-xs', clamp: 'clamp(0.625rem, 0.54rem + 0.49vw, 1rem)', mobile: '10px', desktop: '16px', semantic: 'small, label' },
        { token: '--font-size-sm', clamp: 'clamp(0.8rem, 0.68rem + 0.61vw, 1.25rem)', mobile: '13px', desktop: '20px', semantic: 'body-small' },
        { token: '--font-size-md', clamp: 'clamp(1rem, 0.85rem + 0.76vw, 1.56rem)', mobile: '16px', desktop: '25px', semantic: 'body, paragraph' },
        { token: '--font-size-lg', clamp: 'clamp(1.25rem, 1.06rem + 0.95vw, 1.95rem)', mobile: '20px', desktop: '31px', semantic: 'lead, intro' },
        { token: '--font-size-xl', clamp: 'clamp(1.56rem, 1.33rem + 1.19vw, 2.44rem)', mobile: '25px', desktop: '39px', semantic: 'h6, subheading' },
        { token: '--font-size-2xl', clamp: 'clamp(1.95rem, 1.66rem + 1.48vw, 3.05rem)', mobile: '31px', desktop: '49px', semantic: 'h5' },
        { token: '--font-size-3xl', clamp: 'clamp(2.44rem, 2.08rem + 1.85vw, 3.81rem)', mobile: '39px', desktop: '61px', semantic: 'h4' },
        { token: '--font-size-4xl', clamp: 'clamp(3.05rem, 2.6rem + 2.31vw, 4.77rem)', mobile: '49px', desktop: '76px', semantic: 'h3' },
        { token: '--font-size-5xl', clamp: 'clamp(3.81rem, 3.25rem + 2.89vw, 5.96rem)', mobile: '61px', desktop: '95px', semantic: 'h2' },
        { token: '--font-size-6xl', clamp: 'clamp(4.77rem, 4.06rem + 3.61vw, 7.45rem)', mobile: '76px', desktop: '119px', semantic: 'h1, hero' },
      ]
    }
  };

  // ============ SPACING DATA (4px/8px Grid) ============
  const spacingTokens = [
    { token: '--spacing-0', rem: '0rem', px: '0px', wpVar: '--wp--preset--spacing--0' },
    { token: '--spacing-px', rem: '0.0625rem', px: '1px', wpVar: '--wp--preset--spacing--px' },
    { token: '--spacing-0.5', rem: '0.125rem', px: '2px', wpVar: '--wp--preset--spacing--0-5' },
    { token: '--spacing-1', rem: '0.25rem', px: '4px', wpVar: '--wp--preset--spacing--1' },
    { token: '--spacing-1.5', rem: '0.375rem', px: '6px', wpVar: '--wp--preset--spacing--1-5' },
    { token: '--spacing-2', rem: '0.5rem', px: '8px', wpVar: '--wp--preset--spacing--2' },
    { token: '--spacing-2.5', rem: '0.625rem', px: '10px', wpVar: '--wp--preset--spacing--2-5' },
    { token: '--spacing-3', rem: '0.75rem', px: '12px', wpVar: '--wp--preset--spacing--3' },
    { token: '--spacing-3.5', rem: '0.875rem', px: '14px', wpVar: '--wp--preset--spacing--3-5' },
    { token: '--spacing-4', rem: '1rem', px: '16px', wpVar: '--wp--preset--spacing--4' },
    { token: '--spacing-5', rem: '1.25rem', px: '20px', wpVar: '--wp--preset--spacing--5' },
    { token: '--spacing-6', rem: '1.5rem', px: '24px', wpVar: '--wp--preset--spacing--6' },
    { token: '--spacing-7', rem: '1.75rem', px: '28px', wpVar: '--wp--preset--spacing--7' },
    { token: '--spacing-8', rem: '2rem', px: '32px', wpVar: '--wp--preset--spacing--8' },
    { token: '--spacing-9', rem: '2.25rem', px: '36px', wpVar: '--wp--preset--spacing--9' },
    { token: '--spacing-10', rem: '2.5rem', px: '40px', wpVar: '--wp--preset--spacing--10' },
    { token: '--spacing-12', rem: '3rem', px: '48px', wpVar: '--wp--preset--spacing--12' },
    { token: '--spacing-14', rem: '3.5rem', px: '56px', wpVar: '--wp--preset--spacing--14' },
    { token: '--spacing-16', rem: '4rem', px: '64px', wpVar: '--wp--preset--spacing--16' },
    { token: '--spacing-20', rem: '5rem', px: '80px', wpVar: '--wp--preset--spacing--20' },
    { token: '--spacing-24', rem: '6rem', px: '96px', wpVar: '--wp--preset--spacing--24' },
    { token: '--spacing-32', rem: '8rem', px: '128px', wpVar: '--wp--preset--spacing--32' },
  ];

  // ============ LAYOUT SIZES ============
  const layoutTokens = [
    { token: '--layout-size-xs', rem: '20rem', px: '320px', use: 'Mobile width' },
    { token: '--layout-size-sm', rem: '24rem', px: '384px', use: 'Small container' },
    { token: '--layout-size-md', rem: '28rem', px: '448px', use: 'Medium container' },
    { token: '--layout-size-lg', rem: '32rem', px: '512px', use: 'Large container' },
    { token: '--layout-size-xl', rem: '36rem', px: '576px', use: 'Extra large' },
    { token: '--layout-size-2xl', rem: '42rem', px: '672px', use: 'Prose/reading width' },
    { token: '--layout-size-3xl', rem: '48rem', px: '768px', use: 'Tablet width' },
    { token: '--layout-size-4xl', rem: '56rem', px: '896px', use: 'Medium desktop' },
    { token: '--layout-size-5xl', rem: '64rem', px: '1024px', use: 'Default content' },
    { token: '--layout-size-6xl', rem: '72rem', px: '1152px', use: 'Wide content' },
    { token: '--layout-size-7xl', rem: '80rem', px: '1280px', use: 'Max content' },
    { token: '--layout-content-width', rem: '75rem', px: '1200px', use: 'Default max width' },
    { token: '--layout-wide-width', rem: '90rem', px: '1440px', use: 'Wide alignment' },
  ];

  // ============ CONTROL SIZES ============
  const sizeTokens = [
    { token: '--size-4', rem: '1rem', px: '16px', use: 'Icon small' },
    { token: '--size-5', rem: '1.25rem', px: '20px', use: 'Icon default' },
    { token: '--size-6', rem: '1.5rem', px: '24px', use: 'Icon large' },
    { token: '--size-8', rem: '2rem', px: '32px', use: 'Avatar xs' },
    { token: '--size-10', rem: '2.5rem', px: '40px', use: 'Control height sm' },
    { token: '--size-12', rem: '3rem', px: '48px', use: 'Control height md' },
    { token: '--size-14', rem: '3.5rem', px: '56px', use: 'Control height lg' },
    { token: '--size-16', rem: '4rem', px: '64px', use: 'Avatar md' },
    { token: '--size-20', rem: '5rem', px: '80px', use: 'Avatar lg' },
    { token: '--size-24', rem: '6rem', px: '96px', use: 'Feature icon' },
    { token: '--size-32', rem: '8rem', px: '128px', use: 'Thumbnail sm' },
    { token: '--size-40', rem: '10rem', px: '160px', use: 'Thumbnail md' },
    { token: '--size-48', rem: '12rem', px: '192px', use: 'Card image' },
  ];

  // ============ COLORS ============
  const colorTokens = [
    { token: '--color-brand', wpVar: '--wp--preset--color--brand', figmaScope: 'FRAME_FILL, SHAPE_FILL, TEXT_FILL', desc: 'Primary brand color' },
    { token: '--color-brand-hover', wpVar: '--wp--preset--color--brand-hover', figmaScope: 'FRAME_FILL, SHAPE_FILL', desc: 'Brand hover state' },
    { token: '--color-secondary', wpVar: '--wp--preset--color--secondary', figmaScope: 'FRAME_FILL, SHAPE_FILL, TEXT_FILL', desc: 'Secondary accent' },
    { token: '--color-secondary-hover', wpVar: '--wp--preset--color--secondary-hover', figmaScope: 'FRAME_FILL, SHAPE_FILL', desc: 'Secondary hover' },
    { token: '--color-background', wpVar: '--wp--preset--color--background', figmaScope: 'FRAME_FILL', desc: 'Page background' },
    { token: '--color-foreground', wpVar: '--wp--preset--color--card-text', figmaScope: 'TEXT_FILL', desc: 'Primary text' },
    { token: '--color-muted', wpVar: '--wp--preset--color--muted', figmaScope: 'TEXT_FILL', desc: 'Muted text' },
    { token: '--color-card', wpVar: '--wp--preset--color--card-base', figmaScope: 'FRAME_FILL', desc: 'Card background' },
    { token: '--color-card-border', wpVar: '--wp--preset--color--card-border', figmaScope: 'STROKE_COLOR', desc: 'Card border' },
    { token: '--color-border', wpVar: '--wp--preset--color--border', figmaScope: 'STROKE_COLOR', desc: 'Default border' },
    { token: '--color-text-on-brand', wpVar: '--wp--preset--color--text-on-brand', figmaScope: 'TEXT_FILL', desc: 'Text on brand' },
    { token: '--color-text-on-secondary', wpVar: '--wp--preset--color--text-on-secondary', figmaScope: 'TEXT_FILL', desc: 'Text on secondary' },
    { token: '--color-base', wpVar: '--wp--preset--color--base', figmaScope: 'FRAME_FILL, SHAPE_FILL', desc: 'Dark base' },
  ];

  // ============ BORDER RADIUS ============
  const radiusTokens = [
    { token: '--radius-none', rem: '0rem', px: '0px' },
    { token: '--radius-sm', rem: '0.125rem', px: '2px' },
    { token: '--radius-md', rem: '0.25rem', px: '4px' },
    { token: '--radius-lg', rem: '0.375rem', px: '6px' },
    { token: '--radius-xl', rem: '0.5rem', px: '8px' },
    { token: '--radius-2xl', rem: '0.75rem', px: '12px' },
    { token: '--radius-3xl', rem: '1rem', px: '16px' },
    { token: '--radius-4xl', rem: '1.5rem', px: '24px' },
    { token: '--radius-full', rem: '9999px', px: '9999px' },
  ];

  const radiusSemanticTokens = [
    { token: '--radius-button', mapsTo: 'radius-lg', figmaPx: '6px', wpVar: '--wp--custom--button--border-radius' },
    { token: '--radius-card', mapsTo: 'radius-xl', figmaPx: '8px', wpVar: '--wp--custom--card--border-radius' },
    { token: '--radius-input', mapsTo: 'radius-md', figmaPx: '4px', wpVar: '--wp--custom--input--border-radius' },
    { token: '--radius-badge', mapsTo: 'radius-full', figmaPx: '9999px', wpVar: '--wp--custom--badge--border-radius' },
    { token: '--radius-modal', mapsTo: 'radius-2xl', figmaPx: '12px', wpVar: '--wp--custom--modal--border-radius' },
  ];

  // ============ SHADOWS ============
  const shadowTokens = [
    { token: '--shadow-xs', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', desc: 'Subtle' },
    { token: '--shadow-sm', value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', desc: 'Small' },
    { token: '--shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', desc: 'Medium' },
    { token: '--shadow-lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', desc: 'Large' },
    { token: '--shadow-xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', desc: 'Extra large' },
    { token: '--shadow-2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)', desc: 'Dramatic' },
    { token: '--shadow-inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)', desc: 'Inset' },
  ];

  const shadowSemanticTokens = [
    { token: '--shadow-card', mapsTo: 'shadow-sm', wpVar: '--wp--custom--card--shadow' },
    { token: '--shadow-card-hover', mapsTo: 'shadow-md', wpVar: '--wp--custom--card--shadow-hover' },
    { token: '--shadow-button', mapsTo: 'shadow-sm', wpVar: '--wp--custom--button--shadow' },
    { token: '--shadow-dropdown', mapsTo: 'shadow-lg', wpVar: '--wp--custom--dropdown--shadow' },
    { token: '--shadow-modal', mapsTo: 'shadow-xl', wpVar: '--wp--custom--modal--shadow' },
  ];

  // ============ TRANSITIONS ============
  const transitionTokens = {
    durations: [
      { token: '--duration-75', value: '75ms', desc: 'Instant' },
      { token: '--duration-100', value: '100ms', desc: 'Fast' },
      { token: '--duration-150', value: '150ms', desc: 'Quick' },
      { token: '--duration-200', value: '200ms', desc: 'Normal' },
      { token: '--duration-300', value: '300ms', desc: 'Moderate' },
      { token: '--duration-500', value: '500ms', desc: 'Slow' },
      { token: '--duration-700', value: '700ms', desc: 'Slower' },
      { token: '--duration-1000', value: '1000ms', desc: 'Slowest' },
    ],
    easings: [
      { token: '--ease-linear', value: 'linear', desc: 'Linear' },
      { token: '--ease-in', value: 'cubic-bezier(0.4, 0, 1, 1)', desc: 'Ease in' },
      { token: '--ease-out', value: 'cubic-bezier(0, 0, 0.2, 1)', desc: 'Ease out' },
      { token: '--ease-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', desc: 'Ease in-out' },
      { token: '--ease-bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', desc: 'Bounce' },
    ]
  };

  // ============ COMPONENT TOKENS ============
  const buttonTokens = [
    { token: '--button-bg', mapsTo: 'color-brand', wpVar: '--wp--custom--button--background' },
    { token: '--button-bg-hover', mapsTo: 'color-brand-hover', wpVar: '--wp--custom--button--background-hover' },
    { token: '--button-text', mapsTo: 'color-text-on-brand', wpVar: '--wp--custom--button--text' },
    { token: '--button-border-radius', mapsTo: 'radius-button', wpVar: '--wp--custom--button--border-radius' },
    { token: '--button-padding-x', mapsTo: 'spacing-5', wpVar: '--wp--custom--button--spacing--horizontal' },
    { token: '--button-padding-y', mapsTo: 'spacing-2.5', wpVar: '--wp--custom--button--spacing--vertical' },
  ];

  const cardTokens = [
    { token: '--card-bg', mapsTo: 'color-card', wpVar: '--wp--preset--color--card-base' },
    { token: '--card-border', mapsTo: 'color-card-border', wpVar: '--wp--preset--color--card-border' },
    { token: '--card-text', mapsTo: 'color-card-foreground', wpVar: '--wp--preset--color--card-text' },
    { token: '--card-border-radius', mapsTo: 'radius-card', wpVar: '--wp--custom--card--border-radius' },
    { token: '--card-padding', mapsTo: 'spacing-fluid-md', wpVar: '--wp--custom--card--spacing' },
  ];

  // ============ STYLES ============
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0B1120 0%, #0F172A 100%)',
      color: '#E2E8F0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '24px 32px',
    },
    header: {
      marginBottom: '24px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 700,
      margin: 0,
      letterSpacing: '-0.02em',
      color: '#F8FAFC',
    },
    subtitle: {
      color: '#64748B',
      margin: '4px 0 0 0',
      fontSize: '14px',
    },
    badges: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px',
    },
    badge: {
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 600,
    },
    tabContainer: {
      display: 'flex',
      gap: '4px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    tab: (active) => ({
      padding: '10px 16px',
      background: active ? '#33EFAB' : 'transparent',
      color: active ? '#0B1120' : '#94A3B8',
      border: active ? 'none' : '1px solid #1E293B',
      borderRadius: '6px',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: '13px',
      transition: 'all 0.15s ease',
    }),
    scaleToggle: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px',
    },
    scaleBtn: (active) => ({
      padding: '8px 16px',
      background: active ? '#33EFAB' : '#1E293B',
      color: active ? '#0B1120' : '#94A3B8',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: '12px',
    }),
    tableHeader: {
      display: 'grid',
      gap: '12px',
      padding: '8px 12px',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#64748B',
      borderBottom: '1px solid #1E293B',
      marginBottom: '4px',
    },
    row: {
      display: 'grid',
      gap: '12px',
      padding: '12px',
      background: '#0F172A',
      borderRadius: '6px',
      marginBottom: '2px',
      alignItems: 'center',
      fontSize: '13px',
    },
    token: {
      color: '#33EFAB',
      fontFamily: 'JetBrains Mono, Consolas, monospace',
      fontSize: '12px',
    },
    value: {
      color: '#94A3B8',
    },
    muted: {
      color: '#64748B',
      fontSize: '11px',
    },
    semantic: {
      color: '#A78BFA',
      fontSize: '11px',
    },
    wpVar: {
      color: '#F59E0B',
      fontFamily: 'JetBrains Mono, Consolas, monospace',
      fontSize: '10px',
    },
    sectionTitle: {
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#64748B',
      marginBottom: '16px',
      paddingBottom: '8px',
      borderBottom: '1px solid #1E293B',
    },
    preview: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  };

  // ============ TAB BUTTONS ============
  const tabs = [
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'sizing', label: 'Sizing & Layout' },
    { id: 'colors', label: 'Colors' },
    { id: 'radius', label: 'Border Radius' },
    { id: 'shadows', label: 'Shadows' },
    { id: 'transitions', label: 'Transitions' },
    { id: 'components', label: 'Components' },
  ];

  // ============ TYPOGRAPHY TAB ============
  const TypographyTab = () => {
    const scale = typographyTokens[typeScale];
    return (
      <div>
        <div style={styles.scaleToggle}>
          <button
            style={styles.scaleBtn(typeScale === 'majorSecond')}
            onClick={() => setTypeScale('majorSecond')}
          >
            Major Second (1.125) - Conservative
          </button>
          <button
            style={styles.scaleBtn(typeScale === 'majorThird')}
            onClick={() => setTypeScale('majorThird')}
          >
            Major Third (1.25) - Expressive
          </button>
        </div>
        
        <div style={{ ...styles.tableHeader, gridTemplateColumns: '140px 1fr 80px 100px 140px 80px' }}>
          <span>TOKEN</span>
          <span>CLAMP VALUE</span>
          <span>MOBILE (375PX)</span>
          <span>DESKTOP (1440PX)</span>
          <span>FIGMA SEMANTIC</span>
          <span>PREVIEW</span>
        </div>
        
        {scale.tokens.map((t, i) => (
          <div key={i} style={{ ...styles.row, gridTemplateColumns: '140px 1fr 80px 100px 140px 80px' }}>
            <code style={styles.token}>{t.token}</code>
            <code style={{ ...styles.muted, fontSize: '10px' }}>{t.clamp}</code>
            <span style={styles.value}>{t.mobile}</span>
            <span style={styles.value}>{t.desktop}</span>
            <span style={styles.semantic}>{t.semantic}</span>
            <div style={styles.preview}>
              <span style={{ 
                fontSize: t.desktop, 
                fontWeight: parseInt(t.desktop) > 24 ? 700 : 400,
                lineHeight: 1 
              }}>Aa</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ============ SPACING TAB ============
  const SpacingTab = () => (
    <div>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '140px 100px 80px 1fr 100px' }}>
        <span>TOKEN</span>
        <span>REM</span>
        <span>FIGMA (PX)</span>
        <span>GREENLIGHT VARIABLE</span>
        <span>PREVIEW</span>
      </div>
      
      {spacingTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '140px 100px 80px 1fr 100px' }}>
          <code style={styles.token}>{t.token}</code>
          <span style={styles.value}>{t.rem}</span>
          <span style={styles.value}>{t.px}</span>
          <span style={styles.wpVar}>{t.wpVar}</span>
          <div style={styles.preview}>
            <div style={{
              width: Math.min(parseInt(t.px), 80) + 'px',
              height: '12px',
              background: 'linear-gradient(90deg, #33EFAB, #33EFAB80)',
              borderRadius: '2px',
              minWidth: parseInt(t.px) === 0 ? '2px' : '4px',
            }} />
          </div>
        </div>
      ))}
    </div>
  );

  // ============ SIZING & LAYOUT TAB ============
  const SizingTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Layout Sizes</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '180px 80px 100px 1fr 120px' }}>
        <span>TOKEN</span>
        <span>REM</span>
        <span>FIGMA (PX)</span>
        <span>USE CASE</span>
        <span>PREVIEW</span>
      </div>
      
      {layoutTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '180px 80px 100px 1fr 120px' }}>
          <code style={styles.token}>{t.token}</code>
          <span style={styles.value}>{t.rem}</span>
          <span style={styles.value}>{t.px}</span>
          <span style={styles.semantic}>{t.use}</span>
          <div style={styles.preview}>
            <div style={{
              width: `${(parseInt(t.px) / 1440) * 100}%`,
              minWidth: '8px',
              maxWidth: '100px',
              height: '8px',
              background: '#3B82F6',
              borderRadius: '2px',
            }} />
          </div>
        </div>
      ))}

      <h3 style={{ ...styles.sectionTitle, marginTop: '32px' }}>Control Sizes</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '140px 80px 80px 1fr 100px' }}>
        <span>TOKEN</span>
        <span>REM</span>
        <span>FIGMA (PX)</span>
        <span>USE CASE</span>
        <span>PREVIEW</span>
      </div>
      
      {sizeTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '140px 80px 80px 1fr 100px' }}>
          <code style={styles.token}>{t.token}</code>
          <span style={styles.value}>{t.rem}</span>
          <span style={styles.value}>{t.px}</span>
          <span style={styles.semantic}>{t.use}</span>
          <div style={styles.preview}>
            <div style={{
              width: Math.min(parseInt(t.px), 48) + 'px',
              height: Math.min(parseInt(t.px), 32) + 'px',
              background: '#1E293B',
              border: '2px solid #33EFAB',
              borderRadius: '4px',
            }} />
          </div>
        </div>
      ))}
    </div>
  );

  // ============ COLORS TAB ============
  const ColorsTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Semantic Color Tokens</h3>
      <p style={{ ...styles.muted, marginBottom: '16px' }}>
        These tokens map to Greenlight presets. Define actual values in your theme configuration.
      </p>
      
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '160px 1fr 200px 160px' }}>
        <span>TOKEN</span>
        <span>GREENLIGHT VARIABLE</span>
        <span>FIGMA SCOPE</span>
        <span>DESCRIPTION</span>
      </div>
      
      {colorTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '160px 1fr 200px 160px' }}>
          <code style={styles.token}>{t.token}</code>
          <span style={styles.wpVar}>{t.wpVar}</span>
          <span style={{ ...styles.muted, fontFamily: 'JetBrains Mono, monospace', fontSize: '10px' }}>{t.figmaScope}</span>
          <span style={styles.semantic}>{t.desc}</span>
        </div>
      ))}
    </div>
  );

  // ============ BORDER RADIUS TAB ============
  const RadiusTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Primitive Radius Scale</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '12px',
        marginBottom: '32px' 
      }}>
        {radiusTokens.map((t, i) => (
          <div key={i} style={{
            background: '#0F172A',
            borderRadius: '8px',
            padding: '16px',
          }}>
            <div style={{
              width: '64px',
              height: '48px',
              background: '#33EFAB',
              borderRadius: t.px === '9999px' ? '9999px' : t.px,
              marginBottom: '12px',
            }} />
            <code style={styles.token}>{t.token}</code>
            <div style={{ ...styles.muted, marginTop: '4px' }}>{t.rem} / {t.px}</div>
          </div>
        ))}
      </div>

      <h3 style={styles.sectionTitle}>Semantic Radius Aliases</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '160px 120px 80px 1fr' }}>
        <span>SEMANTIC TOKEN</span>
        <span>MAPS TO</span>
        <span>FIGMA VALUE</span>
        <span>GREENLIGHT VARIABLE</span>
      </div>
      
      {radiusSemanticTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '160px 120px 80px 1fr' }}>
          <code style={styles.token}>{t.token}</code>
          <code style={{ color: '#F59E0B', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>{t.mapsTo}</code>
          <span style={styles.value}>{t.figmaPx}</span>
          <span style={styles.wpVar}>{t.wpVar}</span>
        </div>
      ))}
    </div>
  );

  // ============ SHADOWS TAB ============
  const ShadowsTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Primitive Shadows</h3>
      <div style={{ 
        background: '#E2E8F0',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '32px'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px',
        }}>
          {shadowTokens.map((t, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '100%',
                height: '80px',
                background: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: t.value,
                marginBottom: '12px',
              }} />
              <code style={{ ...styles.token, marginBottom: '4px' }}>{t.token}</code>
              <span style={{ color: '#64748B', fontSize: '12px' }}>{t.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Semantic Shadow Aliases</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '180px 140px 1fr' }}>
        <span>SEMANTIC TOKEN</span>
        <span>MAPS TO</span>
        <span>GREENLIGHT VARIABLE</span>
      </div>
      
      {shadowSemanticTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '180px 140px 1fr' }}>
          <code style={styles.token}>{t.token}</code>
          <code style={{ color: '#F59E0B', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>{t.mapsTo}</code>
          <span style={styles.wpVar}>{t.wpVar}</span>
        </div>
      ))}
    </div>
  );

  // ============ TRANSITIONS TAB ============
  const TransitionsTab = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
      <div>
        <h3 style={styles.sectionTitle}>Durations</h3>
        {transitionTokens.durations.map((t, i) => (
          <div key={i} style={{ ...styles.row, gridTemplateColumns: '160px 100px 1fr' }}>
            <code style={styles.token}>{t.token}</code>
            <span style={styles.value}>{t.value}</span>
            <span style={styles.muted}>{t.desc}</span>
          </div>
        ))}
      </div>
      
      <div>
        <h3 style={styles.sectionTitle}>Easings</h3>
        {transitionTokens.easings.map((t, i) => (
          <div key={i} style={{ ...styles.row, gridTemplateColumns: '140px 1fr 80px' }}>
            <code style={styles.token}>{t.token}</code>
            <code style={{ ...styles.muted, fontSize: '10px' }}>{t.value}</code>
            <span style={styles.semantic}>{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ============ COMPONENTS TAB ============
  const ComponentsTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Button Component</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '180px 180px 1fr' }}>
        <span>TOKEN</span>
        <span>MAPS TO</span>
        <span>GREENLIGHT VARIABLE</span>
      </div>
      
      {buttonTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '180px 180px 1fr' }}>
          <code style={styles.token}>{t.token}</code>
          <code style={{ color: '#F59E0B', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>{t.mapsTo}</code>
          <span style={styles.wpVar}>{t.wpVar}</span>
        </div>
      ))}

      <h3 style={{ ...styles.sectionTitle, marginTop: '32px' }}>Card Component</h3>
      <div style={{ ...styles.tableHeader, gridTemplateColumns: '180px 180px 1fr' }}>
        <span>TOKEN</span>
        <span>MAPS TO</span>
        <span>GREENLIGHT VARIABLE</span>
      </div>
      
      {cardTokens.map((t, i) => (
        <div key={i} style={{ ...styles.row, gridTemplateColumns: '180px 180px 1fr' }}>
          <code style={styles.token}>{t.token}</code>
          <code style={{ color: '#F59E0B', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>{t.mapsTo}</code>
          <span style={styles.wpVar}>{t.wpVar}</span>
        </div>
      ))}

      {/* Component Preview */}
      <h3 style={{ ...styles.sectionTitle, marginTop: '32px' }}>Component Preview</h3>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{
          background: '#FCFCFC',
          borderRadius: '8px',
          padding: '24px',
          minWidth: '280px',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        }}>
          <div style={{ color: '#111827', fontWeight: 600, marginBottom: '8px' }}>Card Title</div>
          <div style={{ color: '#64748B', fontSize: '14px', marginBottom: '16px' }}>Card description text using semantic tokens.</div>
          <button style={{
            background: '#33EFAB',
            color: '#0B1120',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            Primary Button
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={{
            background: '#33EFAB',
            color: '#0B1120',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 600,
          }}>Primary</button>
          <button style={{
            background: 'transparent',
            color: '#33EFAB',
            border: '1px solid #33EFAB',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 600,
          }}>Secondary</button>
          <button style={{
            background: 'transparent',
            color: '#94A3B8',
            border: '1px solid #334155',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 600,
          }}>Ghost</button>
        </div>
      </div>
    </div>
  );

  // ============ TAB CONTENT MAPPING ============
  const tabContent = {
    typography: <TypographyTab />,
    spacing: <SpacingTab />,
    sizing: <SizingTab />,
    colors: <ColorsTab />,
    radius: <RadiusTab />,
    shadows: <ShadowsTab />,
    transitions: <TransitionsTab />,
    components: <ComponentsTab />,
  };

  // ============ MAIN RENDER ============
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Altitude Design System</h1>
        <p style={styles.subtitle}>Framework-agnostic tokens for Greenlight, Elementor, and Figma</p>
        <div style={styles.badges}>
          <span style={{ ...styles.badge, background: '#33EFAB', color: '#0B1120' }}>v1.0.0</span>
          <span style={{ ...styles.badge, background: '#1E293B', color: '#94A3B8' }}>Light Mode</span>
          <span style={{ ...styles.badge, background: '#3B82F6', color: '#FFFFFF' }}>WordPress Ready</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            style={styles.tab(activeTab === tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default DesignSystem;

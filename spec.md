# RJ Vanshika Parmar

## Current State
- Site has page-based routing: home, about, writing, nightrose, partner, social, contact, booksLanguage, hindiBooks, englishBooks, audioBooks
- Hero section has 'Explore Her World' button that scrolls to about section
- Night Rose logo (w-72 h-72) has heavy multi-layer mist/blur effects around it
- No blogs page exists

## Requested Changes (Diff)

### Add
- New `BlogsPage` component with three sections: Blog Posts, Videos, Poems
- New page type `blogs` in App.tsx
- BlogsPage added to routing in App.tsx

### Modify
- Hero section 'Explore Her World' button should navigate to the new `blogs` page instead of scrolling to about
- Navigation.tsx: add 'Blogs' nav pill
- NightRoseSection.tsx: remove all mist/blur div layers around logo; increase logo size from w-72 h-72 to w-96 h-96; replace mist with a clean glowing highlight (radial glow using box-shadow or a single subtle light ring)

### Remove
- The scroll-to-about behavior on 'Explore Her World' button
- All mist blur layers on Night Rose logo (the 5 absolutely positioned divs with blur)

## Implementation Plan
1. Create `src/frontend/src/components/BlogsPage.tsx` with three tab sections (Blog Posts, Videos, Poems) - placeholder content ready for user to fill
2. Update App.tsx to add `blogs` to PageType and render BlogsPage
3. Update HeroSection.tsx to accept onNavigateTo prop and call navigateTo('blogs') on button click
4. Update Navigation.tsx to add Blogs nav pill
5. Update NightRoseSection.tsx: remove mist layers, increase logo size, add single elegant glow effect

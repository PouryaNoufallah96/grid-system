Grid
Display elements in a grid layout.

Grid
A non-responsive grid with no cells.


Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System debug guideWidth={1} unstable_useContainer>
      <Grid columns={5} height="preserve-aspect-ratio" rows={2} />
    </Grid.System>
  );
}
Basic grid
A non-responsive single grid with auto flowing cells configuration.

1
2
3
4
5
6

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System guideWidth={1} unstable_useContainer>
      <Grid columns={3} rows={2}>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
        <Grid.Cell>4</Grid.Cell>
        <Grid.Cell>5</Grid.Cell>
        <Grid.Cell>6</Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
Solid cells
Using the solid prop on cells will occlude the guides that the cell overlaps

1
2
3
4
5
6

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System guideWidth={1} unstable_useContainer>
      <Grid columns={3} rows={2}>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
        <Grid.Cell>4</Grid.Cell>
        <Grid.Cell>5</Grid.Cell>
        <Grid.Cell>6</Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
Responsive grid
Grid component with responsive rows and columns props at all 3 breakpoints.

1
2
3
4
5
6

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System guideWidth={1} unstable_useContainer>
      <Grid columns={3} rows={2}>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
        <Grid.Cell>4</Grid.Cell>
        <Grid.Cell>5</Grid.Cell>
        <Grid.Cell>6</Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
Responsive Grid with responsive guide clipping cells
Grid component with responsive rows and columns props at all 3 breakpoints as well as guide clipping on specific cells.

1 + 2
3
4
5 + 6

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System unstable_useContainer>
      <Grid columns={{ sm: 1, md: 2, lg: 3 }} rows={{ sm: 6, md: 3, lg: 2 }}>
        <Grid.Cell
          column={{ sm: '1', md: '1/3' }}
          row={{ sm: '1/3', md: 1 }}
          solid
        >
          1 + 2
        </Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
        <Grid.Cell>4</Grid.Cell>
        <Grid.Cell
          column={{ sm: 1, md: '1/3', lg: '2/4' }}
          row={{ sm: '5/7', md: 3, lg: 2 }}
          solid
        >
          5 + 6
        </Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
Grid with hidden row guides

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System unstable_useContainer>
      <Grid
        columns={12}
        height="preserve-aspect-ratio"
        hideGuides="row"
        rows={3}
      />
    </Grid.System>
  );
}
Grid with hidden column guides

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System unstable_useContainer>
      <Grid
        columns={12}
        height="preserve-aspect-ratio"
        hideGuides="column"
        rows={3}
      />
    </Grid.System>
  );
}
Grid with overlaying cells
Grid component with cells that overlay another in various states.

1
2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis
3
4

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System unstable_useContainer>
      <Grid columns={12} rows={3}>
        <Grid.Cell column="1/3" row="1/3" solid>
          1
        </Grid.Cell>
        <Grid.Cell column="2/4" row="2/4">
          2
        </Grid.Cell>
        <Grid.Cell column="3/10" row="2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis
        </Grid.Cell>
        <Grid.Cell column="7/12" row="1/-1" solid>
          3
        </Grid.Cell>
        <Grid.Cell column="11/13" row="1/3" solid>
          4
        </Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
Specific Grid with Guide Clipping
Grid component with guide clipping enabled on specific cells.

1
2
3
4
5

Hide code

import { Grid } from 'geist/components';
import type { JSX } from 'react';

export function Component(): JSX.Element {
  return (
    <Grid.System guideWidth={1} unstable_useContainer>
      <Grid columns={3} rows={4}>
        <Grid.Cell column="1/2" row="1/3" solid>
          1
        </Grid.Cell>
        <Grid.Cell column="3/4" row="1/2" solid>
          2
        </Grid.Cell>
        <Grid.Cell column="2/3" row="2/4">
          3
        </Grid.Cell>
        <Grid.Cell column="1/2" row="4/5" solid>
          4
        </Grid.Cell>
        <Grid.Cell column="3/4" row="3/5" solid>
          5
        </Grid.Cell>
      </Grid>
    </Grid.System>
  );
}
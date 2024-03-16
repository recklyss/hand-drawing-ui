type CardProps = {
  /**
   * The elevation of the hand drawing level, by default is 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5
};

/**
 * Wired element based Card
 */
export const Card = ({ elevation }: CardProps) => (
  <div>Card</div>
);
